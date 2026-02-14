export default function Skill({ techName, icon }) {
  return (
    <li className="flex items-center gap-[10px]">
      <img src={icon} className="w-[30px] h-[30px]" alt={techName} />
      <span>{techName}</span>
    </li>
  );
}
