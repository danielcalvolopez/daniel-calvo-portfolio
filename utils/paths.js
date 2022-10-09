import Index from "../components/Index";
import About from "../components/About";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import ContactMe from "../components/ContactMe";

const paths = [
  {
    id: "index",
    Element: Index,
    className: "snap-start",
  },
  {
    id: "about",
    Element: About,
    className: "snap-center",
  },
  {
    id: "projects",
    Element: Projects,
    className: "snap-start",
  },
  {
    id: "skills",
    Element: Skills,
    className: "snap-start",
  },
  {
    id: "contact",
    Element: ContactMe,
    className: "snap-start",
  },
];

export default paths;
