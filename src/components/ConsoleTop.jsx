export default function ConsoleTop({ projectSelected }) {
  return (
    <div className="rounded-tl-[14px] rounded-tr-[14px] flex justify-center items-center bg-[#F0DBDB] w-[523.26px] h-[261.63px]">
      {projectSelected ? (
        <div className="bg-white w-[287.79px] h-[196.22px]">
          <img
            className="w-full h-full object-contain border"
            src={projectSelected.img}
          />
        </div>
      ) : (
        <div className="bg-gray-500 w-[287.79px] h-[196.22px]"></div>
      )}
    </div>
  );
}
