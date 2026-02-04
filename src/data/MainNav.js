import AboutMeTag from "../assets/img/AboutMeTag.svg";
import ProjectsTag from "../assets/img/ProjectsTag.svg";
import ContactTag from "../assets/img/ContactTag.svg";

export const tagData = [
  //Right side
  {
    page: "about",
    locate: "right",
    order: [
      {
        name: "About Me Button",
        src: AboutMeTag,
        isClickable: true,
        isHidden: false,
        isScale: true,
      },
      {
        name: "Projects Button",
        src: ProjectsTag,
        isClickable: true,
        isHidden: true,
      },
      {
        name: "Contact Button",
        src: ContactTag,
        isClickable: true,
        isHidden: true,
      },
    ],
  },

  //Left side
];
