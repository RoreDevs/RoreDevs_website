import { cloneElement, useRef } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * AnimatedOutlet
 *
 * Wraps React Router's <Outlet> so page transitions fade between routes.
 * Motion is disabled entirely when the visitor prefers reduced motion.
 */

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0 },
};

// useOutlet returns a stable element even when location changes, but the
// element must be snapshotted so AnimatePresence can keep the outgoing
// page alive during its exit animation.
function useStableOutlet() {
  const outlet = useOutlet();
  const ref = useRef(outlet);
  if (outlet !== null) ref.current = outlet;
  return ref.current;
}

export default function AnimatedOutlet() {
  const location = useLocation();
  const element = useStableOutlet();
  const reduceMotion = useReducedMotion();

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.2, ease: [0.22, 1, 0.36, 1] };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {element && (
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          className="flex flex-1 flex-col"
        >
          {cloneElement(element)}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
