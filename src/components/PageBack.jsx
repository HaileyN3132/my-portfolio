export default function PageBack({ isHidden = false, children }) {
  return (
    <>
      {!isHidden && (
        <main className="flex flex-col absolute mt-[32.7px] bg-[#FEFCF3] rounded-tl-[10.47px] rounded-tr-[20.93px] rounded-bl-[10.47px] rounded-br-[20.93px]  w-[644.91px] h-[898.69px]">
          {children}
        </main>
      )}
    </>
  );
}
