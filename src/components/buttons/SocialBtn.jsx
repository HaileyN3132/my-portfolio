export default function SocialBtn({ info }) {
  return (
    <a href={info.url} target="_blank">
      <img className="w-[35px] h-[35px]" src={info.icon} alt={info.name} />
    </a>
  );
}
