import { useState } from "react";

import CoverFront from "../components/CoverFront";
import CoverBack from "../components/CoverBack";
import PageFront from "../components/PageFront";
import PageBack from "../components/PageBack";
import MainNav from "../components/MainNav";
import SupportNav from "../components/SupportNav";
import ConsoleTop from "../components/ConsoleTop";
import ConsoleMiddle from "../components/ConsoleMiddle";
import ConsoleBottom from "../components/ConsoleBottom";
import ConsoleDecor from "../components/ConsoleDecor";
import ConsoleBtn from "../components/buttons/ConsoleBtn";

import ProjectCard from "../components/boxes/ProjectCard";
import { projects } from "../data/Projects";

import CrossBtn from "../assets/img/CrossBtn.png";
import RightBtn from "../assets/img/RightBtn.png";

import { tagData } from "../data/MainNav";
import { tagSupportData } from "../data/SupportNav";
import { icons } from "../assets/icons";

export default function Projects() {
  const [projectSelected, setProjectSelected] = useState(undefined);
  const [projectCard, setProjectCard] = useState(projects);

  function update(name) {
    const newList = projects.map((project) => {
      if (project.name === name) {
        const targetProject = { ...project, select: true };
        setProjectSelected(targetProject);
        return targetProject;
      } else return { ...project, select: false };
    });
    setProjectCard(newList);
  }

  return (
    <>
      <div className="flex justify-center mb-[34px] mt-[34px]">
        <CoverFront>
          <SupportNav
            tagInfo={
              tagSupportData.filter(
                (tag) => tag.page === "projects" && tag.locate === "left",
              )[0]
            }
          />
          <PageFront>
            <section className="flex-1">
              <div className=" flex w-full gap-20 m-10 ">
                {projectCard.map((project) => (
                  <ProjectCard
                    key={project.name}
                    project={project}
                    update={update}
                  />
                ))}
              </div>
            </section>
            <section className="flex-1">Sections 2</section>
          </PageFront>
        </CoverFront>

        <CoverBack>
          <SupportNav
            tagInfo={
              tagSupportData.filter(
                (tag) => tag.page === "projects" && tag.locate === "right",
              )[0]
            }
          />
          <PageBack>
            <MainNav
              tagInfo={
                tagData.filter(
                  (tag) => tag.page === "projects" && tag.locate === "right",
                )[0]
              }
            />
            <section className="flex-1 flex mt-[50px]">
              <div className="border border-red-700 flex flex-col w-full items-center">
                <ConsoleTop projectSelected={projectSelected} />

                <ConsoleMiddle />

                <ConsoleBottom>
                  <ConsoleDecor
                    style="flex-1 flex justify-center items-center h-[196.22px]"
                    img={CrossBtn}
                    decorName="Cross Button"
                  />

                  {projectSelected ? (
                    <div className="bg-white flex flex-col w-[287.79px] h-[196.22px] justify-evenly">
                      <div className=" flex w-full h-[40px] justify-center items-center">
                        {projectSelected.techUsed.map((tech) => (
                          <img
                            key={tech}
                            src={icons[tech.toLowerCase()]}
                            className="w-[30px] h-[30px]"
                          />
                        ))}
                      </div>
                      <h1 className="flex justify-center">
                        {projectSelected.name}
                      </h1>
                      <article className="flex-1 flex border">
                        {projectSelected.discription}
                      </article>
                    </div>
                  ) : (
                    <div className="bg-gray-500 w-[287.79px] h-[196.22px]"></div>
                  )}

                  <div className=" flex-1 flex flex-col justify-center items-center h-[196.22px]">
                    <ConsoleDecor
                      style="flex-1 pt-12 flex items-center"
                      img={RightBtn}
                      decorName="Right Buttons"
                    />

                    <div className="flex flex-col gap-2">
                      <ConsoleBtn
                        btnName="Github"
                        link="https://www.google.com/"
                      />

                      <ConsoleBtn
                        btnName="Demo"
                        link="https://www.youtube.com/"
                      />
                    </div>
                  </div>
                </ConsoleBottom>
              </div>
            </section>
          </PageBack>
        </CoverBack>
      </div>
    </>
  );
}
