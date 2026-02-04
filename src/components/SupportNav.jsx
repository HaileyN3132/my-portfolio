import TagBtn from "./buttons/TagBtn";

export default function SupportNav({ tagInfo }) {
  let tagsList = tagInfo.order.map((tag) => (
    <TagBtn
      key={tag.name}
      name={tag.name}
      src={tag.src}
      isHidden={tag.isHidden}
      isClickable={tag.isClickable}
    />
  ));

  return (
    <div className="absolute -mt-5 flex justify-center gap-8 w-[644.91px] h-[63px]">
      {tagsList}
    </div>
  );
}
