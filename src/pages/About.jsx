import CoverFront from "../components/CoverFront";
import CoverBack from "../components/CoverBack";
import PageFront from "../components/PageFront";
import PageBack from "../components/PageBack";
import MainNav from "../components/MainNav";
import SupportNav from "../components/SupportNav";
import IntroBox from "../components/boxes/IntroBox";
import SkillBox from "../components/boxes/SkillBox";
import SkillTitle from "../components/boxes/SkillTitle";
import Skill from "../components/Skill";

import { tagData } from "../data/MainNav";
import { tagSupportData } from "../data/SupportNav";
import { profile } from "../data/Profile";
import SocialBtn from "../components/buttons/SocialBtn";
import { icons } from "../assets/icons";

export default function About() {
  return (
    <>
      <div className="font-display flex justify-center mb-[34px] mt-[34px]">
        <CoverFront>
          <PageFront isHidden>
            <section className="flex-1">Section 3</section>
            <section className="flex-1">Section 4</section>
          </PageFront>
        </CoverFront>

        <CoverBack>
          <SupportNav
            tagInfo={
              tagSupportData.filter(
                (tag) => tag.page === "about" && tag.locate === "right",
              )[0]
            }
          />
          <PageBack>
            <MainNav
              tagInfo={
                tagData.filter(
                  (tag) => tag.page === "about" && tag.locate === "right",
                )[0]
              }
            />
            <section className="flex-1">
              <div className="flex">
                <div className="border flex-1">Profile here</div>
                <IntroBox>
                  <nav className="flex gap-4 justify-end items-center h-[68.24px]">
                    {profile.socialInfo.map((item) => (
                      <SocialBtn info={item} />
                    ))}
                  </nav>

                  <div className="flex flex-col ml-[17px] gap-3">
                    <p>{profile.fullName}</p>
                    <p>{profile.location}</p>
                    <p>{profile.bio}</p>
                  </div>
                </IntroBox>
              </div>
            </section>

            <section className="flex-1">
              <div className="flex w-full justify-between p-4">
                <SkillBox>
                  <SkillTitle
                    title="Front-End Technologies"
                    icon={icons.frontend}
                    alt="Frontend Logo"
                  />

                  <ul className="flex flex-col w-full h-full justify-evenly pl-3 ">
                    {profile.frontendSkills.map((skill) => (
                      <Skill techName={skill.name} icon={skill.icon} />
                    ))}
                  </ul>
                </SkillBox>

                <SkillBox>
                  <SkillTitle
                    title="Back-End Technologies"
                    icon={icons.backend}
                    alt="Backend Logo"
                  />

                  <ul className="flex flex-col w-full h-full justify-evenly pl-3">
                    {profile.backendSkills.map((skill) => (
                      <Skill techName={skill.name} icon={skill.icon} />
                    ))}
                  </ul>
                </SkillBox>
              </div>
            </section>
          </PageBack>
        </CoverBack>
      </div>
    </>
  );
}
