import AboutMeTag from "../assets/img/AboutMeTag.svg";
import ProjectsTag from "../assets/img/ProjectsTag.svg";
import ContactTag from "../assets/img/ContactTag.svg";

export default function MainNav() {
  return (
    <nav className="-mt-13 flex justify-center gap-8 w-[644.91px] h-[63px]">
      <button>
        <img src={AboutMeTag} className="w-[180px]" />
      </button>
      <button>
        <img src={ProjectsTag} className="w-[180px]" />
      </button>
      <button>
        <img src={ContactTag} className="w-[180px]" />
      </button>
    </nav>
  );
}
