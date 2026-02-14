import Contact1 from "../../assets/img/Contact1.jpg";
import { icons } from "../../assets/icons";

export default function ContactDecor() {
  return (
    <div className="shadow-[0_4px_4px_0_rgb(0,0,0,0.25)] flex flex-col gap-4 items-center mt-[91px] rounded-[12px] bg-white w-[405px] h-[477px]">
      <img
        className="w-[308px] h-[304px] mt-[42px]"
        src={Contact1}
        alt="contactPhoto"
      />
      <div className="flex gap-2 items-center w-[308px]">
        <img className="w-[20px] h-[20px]" src={icons.mail} alt="Mail icon" />
        ngohailey02@gmail.com
      </div>
    </div>
  );
}
