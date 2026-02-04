export default function TagBtn({
  name,
  src,
  isHidden,
  isClickable,
  isScale = false,
}) {
  function handleClick() {
    console.log(`${name} clicked!`);
  }

  return (
    <>
      <button
        onClick={handleClick}
        className={
          isClickable
            ? isHidden
              ? "opacity-0 cursor-pointer"
              : isScale
                ? "visible cursor-pointer hover:scale-105 transition-transform"
                : "visible cursor-pointer"
            : "invisible"
        }
      >
        <img className="w-[180px]" src={src} alt={name} />
      </button>
    </>
  );
}
