import CoverFront from "../components/CoverFront";
import CoverBack from "../components/CoverBack";
import PageFront from "../components/PageFront";
import PageBack from "../components/PageBack";
import MainNav from "../components/MainNav";
import SupportNav from "../components/SupportNav";

import ProjectCard from "../components/boxes/ProjectCard";

import CrossBtn from "../assets/img/CrossBtn.png";
import RightBtn from "../assets/img/RightBtn.png";

import { tagData } from "../data/MainNav";
import { tagSupportData } from "../data/SupportNav";

export default function Projects() {
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
                <ProjectCard />

                <ProjectCard />
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
            <section className="flex-1 flex mt-[50px]"></section>
          </PageBack>
        </CoverBack>
      </div>
    </>
  );
}
