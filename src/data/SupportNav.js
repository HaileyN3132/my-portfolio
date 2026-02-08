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
        path: "/about",
        isClickable: false,
        isHidden: false,
      },

      {
        name: "Projects Button",
        src: ProjectsTag,
        path: "/projects",
        isClickable: true,
        isHidden: false,
      },
      {
        name: "Contact Button",
        path: "/contact",
        src: ContactTag,
        isClickable: true,
        isHidden: false,
      },
    ],
  },

  {
    page: "projects",
    locate: "right",
    order: [
      {
        name: "About Me Button",
        src: AboutMeTag,
        path: "/about",
        isClickable: false,
        isHidden: false,
      },

      {
        name: "Projects Button",
        src: ProjectsTag,
        path: "/projects",
        isClickable: false,
        isHidden: false,
      },
      {
        name: "Contact Button",
        path: "/contact",
        src: ContactTag,
        isClickable: true,
        isHidden: false,
      },
    ],
  },

  {
    page: "contact",
    locate: "right",
    order: [
      {
        name: "About Me Button",
        src: AboutMeTag,
        path: "/about",
        isClickable: false,
        isHidden: false,
      },

      {
        name: "Projects Button",
        src: ProjectsTag,
        path: "/projects",
        isClickable: false,
        isHidden: false,
      },
      {
        name: "Contact Button",
        path: "/contact",
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
        path: "/contact",
        src: ContactTag,
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
        name: "About Me Button",
        path: "/about",
        src: AboutMeTag,
        isClickable: true,
        isHidden: false,
      },
    ],
  },

  {
    page: "contact",
    locate: "left",
    order: [
      {
        name: "Contact Button",
        path: "/contact",
        src: ContactTag,
        isClickable: false,
        isHidden: false,
      },
      {
        name: "Projects Button",
        path: "/projects",
        src: ProjectsTag,
        isClickable: true,
        isHidden: false,
      },
      {
        name: "About Me Button",
        path: "/about",
        src: AboutMeTag,
        isClickable: true,
        isHidden: false,
      },
    ],
  },
];
