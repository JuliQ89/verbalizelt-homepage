import Image from "next/image";
import google_play_btn from "../assets/images/google_play_btn.png";
import app_store_btn from "../assets/images/app_store_btn.png";
import Link from "next/link";

const DownloadAppCTA = () => {
  return (
    <div className="w-full px-20 py-40 mt-20 flex flex-col items-center justify-center gap-10 bg-yellow">
      <h1 className="text-6xl font-bold max-w-[75%] text-center leading-[65px]">
        Learn a new language for free download app Now!
      </h1>
      <div className="flex items-center gap-5">
        <Link href="/" className="bg-black rounded-full px-3 py-2">
          <Image
            src={app_store_btn}
            alt=""
            height={55}
            className="pointer-events-none"
          />
        </Link>
        <Link href="/" className="bg-black rounded-full px-3 py-2">
          <Image
            src={google_play_btn}
            alt=""
            height={55}
            className="pointer-events-none"
          />
        </Link>
      </div>
    </div>
  );
};

export default DownloadAppCTA;
