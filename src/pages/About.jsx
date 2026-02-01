import CoverFront from "../components/CoverFront";
import CoverBack from "../components/CoverBack";
import PageFront from "../components/PageFront";
import PageBack from "../components/PageBack";

export default function About() {
  return (
    <>
      <div className="flex justify-center mb-[34px] mt-[34px]">
        <CoverFront>
          <PageFront isHidden />
        </CoverFront>

        <CoverBack>
          <PageBack />
        </CoverBack>
      </div>
    </>
  );
}
