import AboutMeTag from "../assets/img/AboutMeTag.svg";
import ProjectsTag from "../assets/img/ProjectsTag.svg";
import ContactTag from "../assets/img/ContactTag.svg";

export const tagSupportData = [
  //Right side

  //Left side
  {
    page: "projects",
    locate: "left",
    order: [
      { name: "Contact Button", src: ContactTag, isHidden: true },
      { name: "Projects Button", src: ProjectsTag, isHidden: true },
      { name: "About Me Button", src: AboutMeTag, isHidden: false },
    ],
  },
];
