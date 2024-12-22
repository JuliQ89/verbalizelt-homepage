import Image from "next/image";
import mobile_1 from "../assets/images/mobile_1.png";
import mobile_2 from "../assets/images/mobile_2.png";
import person_1 from "../assets/images/person_1.png";
import person_2 from "../assets/images/person_2.png";
import person_3 from "../assets/images/person_3.png";
import person_4 from "../assets/images/person_4.png";
import person_5 from "../assets/images/person_5.png";
import visa from "../assets/images/visa.svg";
import spotify from "../assets/images/spotify.svg";
import linkedin from "../assets/images/linkedin.svg";
import zoom from "../assets/images/zoom.svg";

const HeaderContainer = () => {
  return (
    <div className="w-full flex flex-col px-20 py-10 grow gap-20 justify-evenly border-b border-[#A8A8A8] pb-14">
      <div className="w-full flex gap-10">
        <div className="flex flex-col gap-10 basis-2/5 justify-center">
          <h1 className="text-6xl tracking-wide font-raleway font-bold leading-[60px]">
            We make you learn language easily!
          </h1>
          <p>
            We help you learn language easily, with small lessons, you'll earn
            points and unlock new levels while improving you're world
            communications.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <input
              className="rounded-full py-4 px-5 bg-[#f5f5f5] outline-none border-none w-72 placeholder:text-[#717171]"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            <button className="button">Get Started</button>
          </div>
        </div>
        <div className="flex items-center justify-center basis-3/5">
          <div className="relative h-full w-full z-[1]">
            <div className="bg-[#FFF0BF] rounded-[40px] px-16 max-h-[550px] h-full w-full absolute -z-[1] bottom-0"></div>
            <div className="flex items-end justify-center w-full h-full">
              <Image
                src={mobile_1}
                alt=""
                width={320}
                className="relative left-6"
              />
              <Image
                src={mobile_2}
                alt=""
                width={320}
                className="relative -left-6"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
            <Image src={person_1} alt="" width={55} />
            <Image
              src={person_2}
              alt=""
              width={55}
              className="relative -left-[27.5px]"
            />
            <Image
              src={person_3}
              alt=""
              width={55}
              className="relative -left-[55px]"
            />
            <Image
              src={person_4}
              alt=""
              width={55}
              className="relative -left-[82.5px]"
            />
            <Image
              src={person_5}
              alt=""
              width={55}
              className="relative -left-[110px]"
            />
          </div>
          <p className="relative -left-[95px]">Students Enroll</p>
        </div>
        <div className="flex items-center gap-16">
          <Image src={visa} alt="" height={22} />
          <Image src={spotify} alt="" height={43} />
          <Image src={linkedin} alt="" height={38} />
          <Image src={zoom} alt="" height={46} />
        </div>
      </div>
    </div>
  );
};

export default HeaderContainer;
