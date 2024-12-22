import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full px-20">
      <div className="flex items-center justify-between border-b border-[#A8A8A8] py-4">
        <Link href="/">
          <h1 className="font-bold text-xl">Verbalizelt</h1>
        </Link>
        <div className="flex items-center gap-6">
          <Link className="text-sm" href="/service">
            Service
          </Link>
          <Link className="text-sm" href="/blog">
            Blog
          </Link>
          <Link className="text-sm" href="/about-us">
            About Us
          </Link>
          <Link className="text-sm" href="/contact">
            Contact
          </Link>
        </div>
        <button className="button">Register</button>
      </div>
    </div>
  );
};

export default Header;
