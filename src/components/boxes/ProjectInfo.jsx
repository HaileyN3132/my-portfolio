import { icons } from "../../assets/icons";

export default function ProjectInfo({ projectSelected }) {
  return (
    <>
      {projectSelected ? (
        <div className="border-2 border-gray-500/80 bg-white flex flex-col w-[287.79px] h-[196.22px] justify-evenly gap-2">
          <div className=" flex w-full h-[40px] justify-center items-center gap-1">
            {projectSelected.techUsed.map((tech) => (
              <img
                key={tech}
                src={icons[tech.toLowerCase()]}
                className="w-[30px] h-[30px]"
              />
            ))}
          </div>
          <h1 className="bg-[#d09c94] flex justify-center font-semibold text-lg text-white">
            {projectSelected.name}
          </h1>
          <div className="flex-1 flex text-center px-2 ">
            {projectSelected.discription}
          </div>
        </div>
      ) : (
        <div className="bg-gray-500 w-[287.79px] h-[196.22px]"></div>
      )}
    </>
  );
}
