export default function SkillBox({ children }) {
  return (
    <div className="flex justify-center items-center shadow-[2.62px_5.23px_5.23px_0_rgb(0,0,0,0.25)] border border-[#DCDCDC] rounded-[10.47px] bg-white w-[239.39px] h-[304.8px]">
      <div className="flex flex-col items-center rounded-[6.54px] bg-[#d7ebd7] w-[231.48px] h-[295.63px]">
        {children}
      </div>
    </div>
  );
}
