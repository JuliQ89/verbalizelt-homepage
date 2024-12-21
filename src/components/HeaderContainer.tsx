import Image from "next/image";
import mobile_1 from "../assets/images/mobile_1.png";
import mobile_2 from "../assets/images/mobile_2.png";

const HeaderContainer = () => {
  return (
    <div className="w-full flex py-6 px-10">
      <div className="flex flex-col gap-2 basis-1/2">
        <h1 className="font-bold text-7xl tracking-wide">
          We make you learn language easily!
        </h1>
        <p>
          We help you learn language easily, with small lessons, you'll earn
          points and unlock new levels while improving you're world
          communications.
        </p>
        <div className="flex items-center gap-3">
          <input
            className="rounded-full py-3 px-5 bg-[#bdbdbd]"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <button className="button">Get Started</button>
        </div>
      </div>
      <div className="flex items-center justify-center basis-1/2">
        <div className="bg-[#fef08a] rounded-lg relative">
          <Image src={mobile_1} alt="" />
          <Image src={mobile_2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderContainer;