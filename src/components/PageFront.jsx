export default function PageFront({ isHidden = false, children }) {
  return (
    <>
      {!isHidden && (
        <main className="flex flex-col absolute mt-[32.7px] bg-[#FEFCF3] rounded-tl-[20.93px] rounded-tr-[10.47px] rounded-bl-[20.93px] rounded-br-[10.47px] w-[644.91px] h-[898.69px]">
          {children}
        </main>
      )}
    </>
  );
}
