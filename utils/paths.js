import Index from "../components/Index";
import About from "../components/About";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import ContactMe from "../components/ContactMe";

const paths = [
  {
    id: "index",
    Element: Index,
  },
  {
    id: "about",
    Element: About,
  },
  {
    id: "projects",
    Element: Projects,
  },
  {
    id: "skills",
    Element: Skills,
  },
  {
    id: "contact",
    Element: ContactMe,
  },
];

export default paths;
