import AboutMeTag from "../assets/img/AboutMeTag.svg";
import ProjectsTag from "../assets/img/ProjectsTag.svg";
import ContactTag from "../assets/img/ContactTag.svg";

export const tagsData = [
  //Right side
  {
    page: "about",
    locate: "right",
    order: [
      { name: "About Me Button", src: AboutMeTag, isHidden: false },
      { name: "Projects Button", src: ProjectsTag, isHidden: true },
      { name: "Contact Button", src: ContactTag, isHidden: true },
    ],
  },

  //Left side
];
