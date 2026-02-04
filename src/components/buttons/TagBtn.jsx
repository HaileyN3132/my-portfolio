export default function TagBtn({ name, src, isHidden }) {
  function handleClick() {
    console.log(`${name} clicked!`);
  }

  return (
    <>
      <button
        onClick={handleClick}
        className={
          isHidden
            ? "invisible"
            : "visible cursor-pointer hover:scale-105 transition-transform"
        }
      >
        <img className="w-[180px]" src={src} alt={name} />
      </button>
    </>
  );
}
