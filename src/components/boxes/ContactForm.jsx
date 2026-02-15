import { icons } from "../../assets/icons";

export default function ContactForm() {
  function sendMessage(dataForm) {
    const name = dataForm.get("name");
    const email = dataForm.get("email");
    const message = dataForm.get("message");

    alert(`${name} (${email}) said "${message}"`);
  }

  return (
    <form action={sendMessage}>
      <ul className="flex flex-col gap-2">
        <li className="ml-4 mr-4 flex items-center gap-2 border-b-2 border-[#A18066] h-[40px]">
          <label htmlFor="name" className="font-semibold text-[#A18066]">
            From
          </label>
          <input
            id="name"
            name="name"
            className="outline-none"
            type="text"
            placeholder="enter name"
          />
        </li>
        <li className="ml-4 mr-4 flex items-center gap-2 border-b-2 border-[#A18066] h-[40px]">
          <label htmlFor="email" className="font-semibold text-[#A18066]">
            Email
          </label>
          <input
            id="email"
            name="email"
            className="outline-none"
            type="text"
            placeholder="enter email"
          />
        </li>
        <li className="ml-4 mr-4">
          <textarea
            name="message"
            className="resize-none placeholder-[#A18066] placeholder:font-semibold mt-2 border-0 outline-none w-full h-[250px]"
            placeholder="Type your message"
          />
        </li>
        <li className="pr-3 flex justify-end w-full">
          <button className="hover:bg-[#a78e7c] hover:cursor-pointer text-[15px] font-semibold rounded-full flex gap-1 w-[96px] h-[31px] justify-center items-center border bg-[#A18066] text-white">
            <img
              className="w-[17px] h-[19px]"
              src={icons.send}
              alt="Send Icon"
            />
            Submit
          </button>
        </li>
      </ul>
    </form>
  );
}
