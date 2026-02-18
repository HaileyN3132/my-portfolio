import Project1 from "../../assets/img/Project1.png";
import Selection from "../../assets/img/Selection.png";

export default function ProjectCard() {
  return (
    <div className=" flex justify-center items-center border ">
      <div className="rounded-tl-[6px] rounded-tr-[6px] rounded-br-[6px] rounded-bl-[26px] flex justify-center items-center bg-[#4E4E4E] w-[160px] h-[180px]">
        <img
          className="rounded-tl-[6px] rounded-tr-[6px] rounded-br-[6px] rounded-bl-[20px] w-[130px] h-[160px] object-cover"
          src={Project1}
          alt=""
        />
      </div>
      <img
        className="absolute w-60 h-60 absolute opacity-0 hover:opacity-100"
        src={Selection}
        alt=""
      />
    </div>
  );
}
