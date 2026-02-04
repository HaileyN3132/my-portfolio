import CoverFront from "../components/CoverFront";
import CoverBack from "../components/CoverBack";
import PageFront from "../components/PageFront";
import PageBack from "../components/PageBack";
import MainNav from "../components/MainNav";
import SupportNav from "../components/SupportNav";

import AboutMeTag from "../assets/img/AboutMeTag.svg";
import ProjectsTag from "../assets/img/ProjectsTag.svg";
import ContactTag from "../assets/img/ContactTag.svg";

import { tagData } from "../data/MainNav";
import { tagSupportData } from "../data/SupportNav";

export default function About() {
  const tagSupportTarget = tagSupportData.filter(
    (tag) => tag.page === "projects" && tag.locate === "left",
  );

  const tagTarget = tagData.filter(
    (tag) => tag.page === "about" && tag.locate === "right",
  );

  return (
    <>
      <div className="flex justify-center mb-[34px] mt-[34px]">
        <CoverFront>
          <SupportNav tagInfo={tagSupportTarget[0]} />
          <PageFront>
            <MainNav tagInfo={tagTarget[0]} />
            <section className="flex-1">Section 3</section>
            <section className="flex-1">Section 4</section>
          </PageFront>
        </CoverFront>

        <CoverBack>
          <div className="absolute -mt-5 flex justify-center gap-8 w-[644.91px] h-[63px]">
            <button>
              <img src={AboutMeTag} className="w-[180px]" />
            </button>
            <button>
              <img src={ProjectsTag} className="w-[180px]" />
            </button>
            <button>
              <img src={ContactTag} className="w-[180px]" />
            </button>
          </div>
          <PageBack>
            <MainNav tagInfo={tagTarget[0]} />
            <section className="flex-1">Section 1</section>
            <section className="flex-1">Section 2</section>
          </PageBack>
        </CoverBack>
      </div>
    </>
  );
}
