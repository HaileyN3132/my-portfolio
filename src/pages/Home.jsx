import AboutMeTag from "../assets/img/AboutMeTag.svg";
import ProjectsTag from "../assets/img/ProjectsTag.svg";
import ContactTag from "../assets/img/ContactTag.svg";

import { useNavigate } from "react-router";

export default function Home() {
  let navigate = useNavigate();

  return (
    /*
    <>
      <div class="relative">
        <img
          src={ProjectsTag}
          alt="Top Image"
          className="mt-10 h-25 w-full rounded-lg shadow-lg"
        />
        <div class="absolute -mt-17 bg-blue-500 h-32 w-full rounded-lg z-10">
          Bottom Div
        </div>
      </div>
    </>
    */

    <>
      <main className=" relative flex flex-col items-center justify-center m-1">
        <div className="flex w-[516px] justify-end gap-6">
          <img src={AboutMeTag} />
          <img src={ProjectsTag} />
          <img src={ContactTag} />
        </div>

        <div className="shadow-[10px_20px_35px_10px_rgba(0,0,0,0.25)] absolute mt-162 z-10 flex flex-col w-[516px] h-[669px] bg-[#294645] rounded-tl-lg rounded-bl-lg rounded-tr-4xl rounded-br-4xl">
          <section className="flex-1">
            <h1 className="text-white"></h1>
          </section>
          <section className="flex flex-1 justify-end items-center">
            <div className="shadow-[0_8px_10px_0_rgba(0,0,0,0.25)] flex justify-end items-center w-[189px] h-[69px] bg-[#FEFCF3] rounded-tl-full rounded-bl-full">
              <button
                onClick={() => navigate("/about")}
                className="flex items-center w-[178px] h-[48px] border-r-0 border-3 border-dashed border-gray-400 bg-transparent border rounded-tl-full rounded-bl-full"
              >
                <div className="cursor-pointer rounded-full w-6 h-6 bg-[#A18066] m-2"></div>
              </button>
            </div>
          </section>
          <section className="flex-1">
            <h1 className="text-white"></h1>
          </section>
        </div>
      </main>
    </>
  );
}
