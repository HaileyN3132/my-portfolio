import AboutMeTag from "../assets/img/AboutMeTag.svg";
import ProjectsTag from "../assets/img/ProjectsTag.svg";
import ContactTag from "../assets/img/ContactTag.svg";

export const tagSupportData = [
  //Right side
  {
    page: "about",
    locate: "right",
    order: [
      {
        name: "About Me Button",
        src: AboutMeTag,
        isClickable: false,
        isHidden: false,
      },

      {
        name: "Projects Button",
        src: ProjectsTag,
        isClickable: true,
        isHidden: false,
      },
      {
        name: "Contact Button",
        src: ContactTag,
        isClickable: true,
        isHidden: false,
      },
    ],
  },

  //Left side
  {
    page: "projects",
    locate: "left",
    order: [
      {
        name: "Contact Button",
        src: ContactTag,
        isClickable: false,
        isHidden: true,
      },
      {
        name: "Projects Button",
        src: ProjectsTag,
        isClickable: false,
        isHidden: false,
      },
      {
        name: "About Me Button",
        src: AboutMeTag,
        isClickable: true,
        isHidden: false,
      },
    ],
  },
];
