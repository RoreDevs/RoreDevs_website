import TeamMemberCard from "../components/TeamMemberCard";
import ericaImg from "../assets/Erica.jpg";
import obedImg from "../assets/Obed.png";
import raymondImg from "../assets/Raymond.jpg";
import rosemaryImg from "../assets/Rosemary.jpeg";

const TEAM = [
  {
    image: rosemaryImg,
    name: "Rosemary Boahemaa Dwamena",
    initials: "RBD",
    role: "Team Lead & Developer",
    bio: "99 little bugs in the code...",
    socials: {
      Facebook: "https://www.facebook.com/share/18xA92qCCi/?mibextid=wwXIfr",
      Instagram: "https://www.instagram.com/_rosemaryboahemaa",
      Twitter: "https://x.com/dwamen1dwamena?s=11",
      Linkedin: "https://www.linkedin.com/in/rosemaryboahemaa",
      Github: "https://github.com/Rosieeee344",
    },
  },
  {
    image: ericaImg,
    name: "Erica Dansowaa",
    initials: "ED",
    role: "Frontend Developer & Documentation Lead",
    bio: "My code works. Don't ask why....",
    socials: {
      Facebook: "https://www.facebook.com/share/1J2amxJsQE/",
      Instagram: "https://www.instagram.com/doitlikericka",
      Twitter: "https://x.com/Dansowaa28",
      Linkedin: "https://www.linkedin.com/in/erica-dansowaa-007047400",
      Github: "https://github.com/dansowaaerica28",
    },
  },
  {
    image: raymondImg,
    name: "Raymond Selorm Tormeti",
    initials: "RST",
    role: "Design Lead & Developer",
    bio: "error 404 : bio not found",
    socials: {
      Facebook: "https://www.facebook.com/share/1DNTLhBzZ2/",
      Instagram: "https://www.instagram.com/raymond_notch",
      Twitter: "https://x.com/raymomd06",
      Linkedin: "https://www.linkedin.com/in/raymond-tormeti",
      Github: "https://github.com/raymondnotch-sketch",
    },
  },
  {
    image: obedImg,
    name: "Obed Yakpa",
    initials: "OY",
    role: "Backend Lead & Developer",
    bio: "I just build.",
    socials: {
      Facebook: "https://www.facebook.com/share/194HBTYmC4/",
      Instagram: "https://www.instagram.com/mr.yakpa90",
      Twitter: "https://x.com/mr_yakpa90",
      Linkedin: "https://www.linkedin.com/in/obed-yakpa-20aa39374",
      Github: "https://github.com/obedyakpa0-dev",
    },
  },
];

export default function Team() {
  return (
    <main className="section container-page">
      <div className="mb-12 text-center">
        <h1 className="text-display-lg text-ink">Team</h1>
        <p className="mt-4 text-ink-muted max-w-2xl mx-auto">
          Honestly, titles don&rsquo;t mean much here &mdash; we&rsquo;re just a
          bunch of students who somehow keep shipping.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM.map((member) => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>
    </main>
  );
}
