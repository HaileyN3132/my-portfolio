import { projectImg } from "../../assets/img/projectPage";

export default function ProjectCard({ project, update }) {
  function selectCard() {
    update(project.name);
    console.log(`Project "${project.name}"" is selected`);
  }

  return (
    <div
      onClick={selectCard}
      className=" flex justify-center items-center border "
    >
      <div className="rounded-tl-[6px] rounded-tr-[6px] rounded-br-[6px] rounded-bl-[26px] flex justify-center items-center bg-[#4E4E4E] w-[160px] h-[180px]">
        <img
          className="rounded-tl-[6px] rounded-tr-[6px] rounded-br-[6px] rounded-bl-[20px] w-[130px] h-[160px] object-cover"
          src={project.img}
          alt="Project Cover"
        />
      </div>
      <img
        className={
          project.select
            ? "absolute w-60 h-60 opacity-100"
            : "absolute w-60 h-60 opacity-0 hover:opacity-100"
        }
        src={projectImg.select}
        alt="Select border"
      />
    </div>
  );
}
