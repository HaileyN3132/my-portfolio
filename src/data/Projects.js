import { projectImg } from "../assets/img/projectPage";

export const projects = [
  {
    name: "Interactive portfolio",
    img: projectImg.project1,
    imgCover: projectImg.projectCover1,
    techUsed: ["React", "TailwindCSS", "JavaScript", "Figma", "Github"], // array of strings
    discription: "A portfolio decorated as journal with intereactive button",
    repo: "",
    demo: "",
    select: false,
  },
  {
    name: "Customize Todo",
    img: projectImg.project2,
    imgCover: projectImg.projectCover2,
    techUsed: ["JavaScript", "HTML", "CSS"], // array of strings
    discription: "",
    repo: "https://github.com/HaileyN3132/Custom-Todo-List",
    demo: "https://haileyn3132.github.io/Custom-Todo-List/",
    select: false,
  },
  {
    name: "Study Corner",
    img: projectImg.project2,
    imgCover: projectImg.projectCover1,
    techUsed: ["Java", "Firebase", "Android"], // array of strings
    discription: "",
    repo: "https://github.com/HaileyN3132/Study_Corner_App",
    demo: "https://github.com/HaileyN3132/Study_Corner_App",
    select: false,
  },
];
