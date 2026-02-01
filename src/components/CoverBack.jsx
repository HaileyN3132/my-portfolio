import AboutMeTag from "../assets/img/AboutMeTag.svg";
import ProjectsTag from "../assets/img/ProjectsTag.svg";
import ContactTag from "../assets/img/ContactTag.svg";

export default function CoverBack({ children }) {
  return (
    <>
      <main className="relative flex flex-col items-start shadow-[13.08px_26.16px_45.78px_13.08px_rgba(0,0,0,0.25)]  rounded-tl-[10.47px] rounded-tr-[36.63px] rounded-br-[36.63px] rounded-bl-[10.47px] bg-[#294645] w-[675px] h-[964.1px]">
        {children}
      </main>
    </>
  );
}
