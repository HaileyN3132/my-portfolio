import { icons } from "../../assets/icons";

export default function ProjectInfo({ projectSelected }) {
  return (
    <>
      {projectSelected ? (
        <div className="bg-white flex flex-col w-[287.79px] h-[196.22px] justify-evenly">
          <div className=" flex w-full h-[40px] justify-center items-center gap-1">
            {projectSelected.techUsed.map((tech) => (
              <img
                key={tech}
                src={icons[tech.toLowerCase()]}
                className="w-[30px] h-[30px]"
              />
            ))}
          </div>
          <h1 className="flex justify-center">{projectSelected.name}</h1>
          <article className="flex-1 flex border">
            {projectSelected.discription}
          </article>
        </div>
      ) : (
        <div className="bg-gray-500 w-[287.79px] h-[196.22px]"></div>
      )}
    </>
  );
}
