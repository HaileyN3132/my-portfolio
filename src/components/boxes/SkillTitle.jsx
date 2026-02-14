export default function SkillTitle({ title, icon, alt }) {
  return (
    <div className="flex justify-center gap-[5px] items-center bold mt-[5.88px] text-white bg-[#8cb98b] w-[218.46px] h-[35.32px]">
      <img src={icon} className="w-[25px] " alt={alt} />
      <span className=" font-extrabold text-white [-webkit-text-stroke:1.1px_rgba(0,0,0,0.15)]">
        {title}
      </span>
    </div>
  );
}
