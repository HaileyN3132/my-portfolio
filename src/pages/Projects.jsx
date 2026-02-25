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
import ProjectInfo from "../components/boxes/ProjectInfo";
import { projects } from "../data/Projects";

import CrossBtn from "../assets/img/CrossBtn.png";
import RightBtn from "../assets/img/RightBtn.png";

import { tagData } from "../data/MainNav";
import { tagSupportData } from "../data/SupportNav";

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
              <div className=" flex flex-wrap w-full gap-30 m-12 ">
                {projectCard.map((project) => (
                  <ProjectCard
                    key={project.name}
                    project={project}
                    update={update}
                  />
                ))}
              </div>
            </section>
            <section className="hidden flex-1">Sections 2</section>
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
              <div className=" flex flex-col w-full items-center">
                <ConsoleTop projectSelected={projectSelected} />

                <ConsoleMiddle />

                <ConsoleBottom>
                  <ConsoleDecor
                    style="flex-1 flex justify-center items-center h-[196.22px]"
                    img={CrossBtn}
                    decorName="Cross Button"
                  />

                  <ProjectInfo projectSelected={projectSelected} />

                  <div className=" flex-1 flex flex-col justify-center items-center h-[196.22px]">
                    <ConsoleDecor
                      style="flex-1 pt-12 flex items-center"
                      img={RightBtn}
                      decorName="Right Buttons"
                    />

                    <div className="flex flex-col gap-2">
                      <ConsoleBtn
                        btnName="Github"
                        link={
                          projectSelected?.repo
                            ? projectSelected.repo
                            : "https://github.com/HaileyN3132"
                        }
                      />

                      <ConsoleBtn
                        btnName="Demo"
                        link={
                          projectSelected?.demo
                            ? projectSelected.demo
                            : "https://github.com/HaileyN3132"
                        }
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
