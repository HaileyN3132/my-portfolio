import CoverFront from "../components/CoverFront";
import CoverBack from "../components/CoverBack";
import PageFront from "../components/PageFront";
import PageBack from "../components/PageBack";
import MainNav from "../components/MainNav";
import SupportNav from "../components/SupportNav";

import ContactDecor from "../components/boxes/ContactDecor";
import ContactForm from "../components/boxes/ContactForm";

import { tagData } from "../data/MainNav";
import { tagSupportData } from "../data/SupportNav";

export default function Contact() {
  return (
    <>
      <div className="flex justify-center mb-[34px] mt-[34px]">
        <CoverFront>
          <SupportNav
            tagInfo={
              tagSupportData.filter(
                (tag) => tag.page === "contact" && tag.locate === "left",
              )[0]
            }
          />
          <PageFront>
            <section className="flex-1 flex justify-center">
              <ContactDecor />
            </section>
            <section className="flex-1">Section 2</section>
          </PageFront>
        </CoverFront>

        <CoverBack>
          <SupportNav
            tagInfo={
              tagSupportData.filter(
                (tag) => tag.page === "contact" && tag.locate === "right",
              )[0]
            }
          />
          <PageBack>
            <MainNav
              tagInfo={
                tagData.filter(
                  (tag) => tag.page === "contact" && tag.locate === "right",
                )[0]
              }
            />
            <section className="flex-1 flex justify-center">
              <div className="shadow-[0_4px_4px_0_rgb(0,0,0,0.25)] font-content rounded-tr-[30px] rounded-br-[30px] rounded-bl-[30px] bg-white mt-[106px] w-[436px] h-[467px]">
                <div className="pl-4 pr-4 flex items-center font-semibold bg-[#A18066] rounded-tr-[30px] text-white w-full h-[49px]">
                  New Message
                </div>
                <ContactForm />
              </div>
            </section>
            <section className="flex-1">Section 4</section>
          </PageBack>
        </CoverBack>
      </div>
    </>
  );
}
