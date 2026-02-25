import { NavLink } from "react-router";

export default function TagBtn({
  name,
  src,
  path,
  isHidden,
  isClickable,
  isScale = false,
}) {
  function handleClick() {}

  return (
    <>
      <NavLink
        to={path}
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
      </NavLink>
    </>
  );
}
