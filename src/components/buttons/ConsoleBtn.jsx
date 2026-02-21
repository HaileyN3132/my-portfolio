export default function ConsoleBtn({ btnName, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="font-semibold text-gray-500/80 hover:cursor-pointer flex items-center gap-2"
    >
      <div className=" hover:border hover:border-black/30 bg-[#d09c94] rounded-full w-[15px] h-[15px]"></div>
      {btnName}
    </a>
  );
}
