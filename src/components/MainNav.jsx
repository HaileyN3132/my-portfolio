import TagBtn from "./buttons/TagBtn";

export default function MainNav({ tagInfo }) {
  let tagsList = tagInfo.order.map((tag) => (
    <TagBtn
      key={tag.name}
      name={tag.name}
      src={tag.src}
      isHidden={tag.isHidden}
    />
  ));

  return (
    <nav className="-mt-13 flex justify-center gap-8 w-[644.91px] h-[63px]">
      {tagsList}
    </nav>
  );
}
