export default function ConsoleDecor({ style, decorName, img }) {
  return (
    <div className={style}>
      <img className="w-[60px] h-[60px]" src={img} alt={decorName} />
    </div>
  );
}
