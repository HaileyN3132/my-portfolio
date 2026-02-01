export default function PageFront({ isHidden = false }) {
  return (
    <>
      {!isHidden && (
        <main className="rounded-tl-[20.93px] rounded-tr-[10.47px] rounded-bl-[20.93px] rounded-br-[10.47px] bg-[#FEFCF3] w-[644.91px] h-[898.69px]">
          Content FRONT added here!
        </main>
      )}
    </>
  );
}
