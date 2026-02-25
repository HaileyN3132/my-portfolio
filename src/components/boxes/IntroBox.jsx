export default function IntroBox({ children }) {
  return (
    <div className="shadow-[2.62px_5.23px_10.47px_0_rgba(0,0,0,0.25)] border-[#DCDCDC] flex justify-center items-center mt-[35.32px] mr-[25.35px] rounded-[10.47px] bg-white border w-[357.97px] h-[317.98px]">
      <div className=" rounded-[6.54px] bg-[#d7ebd7] w-[347.97px] h-[305.75px]">
        {children}
      </div>
    </div>
  );
}
