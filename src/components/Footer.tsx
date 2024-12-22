import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full px-20 py-10 mt-20 flex flex-col gap-7">
      <div className="w-full flex justify-between mb-3">
        <div className="flex flex-col gap-4">
          <Link href="/">
            <h1 className="font-bold text-2xl">Verbalizelt</h1>
          </Link>
          <p className="max-w-md leading-8 text-lg">
            Learning is a global training provider based across the UK that
            specialises in accrodited and bespoke training course.
          </p>
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="text-xl w-fit hover:translate-x-2 transition-all duration-75"
            >
              About Us
            </Link>
            <Link
              href="/"
              className="text-xl w-fit hover:translate-x-2 transition-all duration-75"
            >
              Terms & conditions
            </Link>
            <Link
              href="/"
              className="text-xl w-fit hover:translate-x-2 transition-all duration-75"
            >
              Twitter
            </Link>
          </div>
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="text-xl w-fit hover:translate-x-2 transition-all duration-75"
            >
              Service
            </Link>
            <Link
              href="/"
              className="text-xl w-fit hover:translate-x-2 transition-all duration-75"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-xl w-fit hover:translate-x-2 transition-all duration-75"
            >
              Facebook
            </Link>
          </div>
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="text-xl w-fit hover:translate-x-2 transition-all duration-75"
            >
              Blog
            </Link>
            <Link
              href="/"
              className="text-xl w-fit hover:translate-x-2 transition-all duration-75"
            >
              Become a Partner
            </Link>
            <Link
              href="/"
              className="text-xl w-fit hover:translate-x-2 transition-all duration-75"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
      <hr className="border-divider" />
      <div className="w-full flex items-center justify-center">
        <p>Privacy Policy | Terms & Conditions | Cookies Policy </p>
      </div>
    </div>
  );
};

export default Footer;
