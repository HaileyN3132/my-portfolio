import CoverFront from "../components/CoverFront";
import CoverBack from "../components/CoverBack";

export default function About() {
  return (
    <>
      <div className="flex justify-center mb-[34px] mt-[34px]">
        <CoverFront />
        <CoverBack />
      </div>
    </>
  );
}
