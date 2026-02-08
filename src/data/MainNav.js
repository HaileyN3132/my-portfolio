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
        path: "/about",
        src: AboutMeTag,
        isClickable: true,
        isHidden: false,
        isScale: true,
      },
      {
        name: "Projects Button",
        path: "/projects",
        src: ProjectsTag,
        isClickable: true,
        isHidden: true,
      },
      {
        name: "Contact Button",
        path: "/contact",
        src: ContactTag,
        isClickable: true,
        isHidden: true,
      },
    ],
  },

  {
    page: "projects",
    locate: "right",
    order: [
      {
        name: "About Me Button",
        path: "/about",
        src: AboutMeTag,
        isClickable: true,
        isHidden: true,
      },
      {
        name: "Projects Button",
        path: "/projects",
        src: ProjectsTag,
        isClickable: true,
        isHidden: false,
        isScale: true,
      },
      {
        name: "Contact Button",
        path: "/contact",
        src: ContactTag,
        isClickable: true,
        isHidden: true,
      },
    ],
  },

  {
    page: "contact",
    locate: "right",
    order: [
      {
        name: "About Me Button",
        path: "/about",
        src: AboutMeTag,
        isClickable: false,
        isHidden: false,
      },
      {
        name: "Projects Button",
        path: "/projects",
        src: ProjectsTag,
        isClickable: false,
        isHidden: false,
      },
      {
        name: "Contact Button",
        path: "/contact",
        src: ContactTag,
        isClickable: true,
        isHidden: false,
        isScale: true,
      },
    ],
  },

  //Left side
];
