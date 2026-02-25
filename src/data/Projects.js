import { projectImg } from "../assets/img/projectPage";

export const projects = [
  {
    name: "Interactive Portfolio",
    img: projectImg.project1,
    imgCover: projectImg.projectCover1,
    techUsed: ["React", "TailwindCSS", "JavaScript", "Figma", "Github"], // array of strings
    discription:
      "A journal-inspired portfolio website built with JavaScript, React and Tailwind CSS",
    repo: "https://github.com/HaileyN3132/my-portfolio",
    demo: "https://github.com/HaileyN3132/my-portfolio",
    select: false,
  },
  {
    name: "Customize Todo",
    img: projectImg.project2,
    imgCover: projectImg.projectCover2,
    techUsed: ["JavaScript", "HTML", "CSS"], // array of strings
    discription:
      "A note application that enables users to create personalized templates and organize tasks through an intuitive drag-and-drop interface.",
    repo: "https://github.com/HaileyN3132/Custom-Todo-List",
    demo: "https://haileyn3132.github.io/Custom-Todo-List/",
    select: false,
  },
  {
    name: "Study Corner",
    img: projectImg.project3,
    imgCover: projectImg.projectCover3,
    techUsed: ["Java", "Firebase", "Android"], // array of strings
    discription:
      "An Android flashcard app designed to help users manage study sets and track their learning progress through interactive quiz features built with Java and Firebase",
    repo: "https://github.com/HaileyN3132/Study_Corner_App",
    demo: "https://github.com/HaileyN3132/Study_Corner_App",
    select: false,
  },
];
