import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home       from "./pages/Home";
import About      from "./pages/About";
import Team       from "./pages/Team";
import Projects   from "./pages/Projects";
import Contact    from "./pages/Contact";
import NotFound   from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      {/* All public pages share the MainLayout shell (Navbar + Footer + transitions) */}
      <Route element={<MainLayout />}>
        <Route index          element={<Home />}     />
        <Route path="about"    element={<About />}    />
        <Route path="team"     element={<Team />}     />
        <Route path="projects" element={<Projects />} />
        <Route path="contact"  element={<Contact />}  />
        {/* Unknown paths previously rendered a blank page */}
        <Route path="*"        element={<NotFound />} />
      </Route>
    </Routes>
  );
}
