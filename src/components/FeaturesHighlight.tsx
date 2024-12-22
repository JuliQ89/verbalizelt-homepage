import Image from "next/image";
import features_mobile_1 from "../assets/images/features_mobile_1.png";
import features_mobile_2 from "../assets/images/features_mobile_2.png";

const FeaturesHighlight = () => {
  return (
    <div className="w-full px-20 py-10 mt-20 flex flex-col gap-20">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-5xl tracking-wide font-raleway font-bold max-w-2xl leading-[55px]">
          Why you`ll love learning with Verbalizelt
        </h1>
        <p className="max-w-lg text-xl">
          Reach your goals your whay with features designed for the fastets,
          most fun way to learn a language.
        </p>
      </div>

      <div className="flex w-full items-start justify-between gap-16">
        <div className="bg-lightyellow rounded-[40px] flex flex-col gap-10 items-center">
          <div className="flex flex-col items-center justify-between gap-3 px-12 pt-10">
            <h3 className="font-bold text-3xl">Make progress Quickly</h3>
            <p className="max-w-lg text-center">
              Combining the best of all and language science, lessons are
              tailored to help you learn at just the right level and place.
            </p>
          </div>
          <Image src={features_mobile_1} alt="" width={375} />
        </div>

        <div className="bg-lightyellow rounded-[40px] flex flex-col gap-10 items-center">
          <div className="flex flex-col items-center justify-between gap-3 px-12 pt-10">
            <h3 className="font-bold text-3xl">Personalized Learning</h3>
            <p className="max-w-lg text-center">
              Research shows our courses effectively and efficency teach
              reading, listening and speak skills.
            </p>
          </div>
          <Image src={features_mobile_2} alt="" width={375} />
        </div>
      </div>
    </div>
  );
};

export default FeaturesHighlight;
