import Image from "next/image";
import world from "../assets/images/world.png";

const GlobalStats = () => {
  return (
    <div className="w-full px-20 py-10 mt-20 flex flex-col gap-20">
      <div className="w-full flex items-center gap-4 flex-col">
        <h1 className="text-6xl font-bold">Learn a new language the fun way</h1>
        <p className="text-xl">
          Reach your language goals fast with the world`s #1 education app
        </p>
      </div>

      <div className="w-full flex items-center justify-center">
        <Image src={world} alt="" />
      </div>

      <div className="w-full flex items-center justify-around gap-5">
        <div className="flex flex-col gap-4">
          <h1 className="text-[100px] font-bold leading-[110px]">4.5k+</h1>
          <p className="text-xl">Daily register from new users</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[100px] font-bold leading-[110px]">1.5k+</h1>
          <p className="text-xl">Language In the world</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[100px] font-bold leading-[110px]">1000+</h1>
          <p className="text-xl">Total learners in the world</p>
        </div>
      </div>
    </div>
  );
};

export default GlobalStats;
