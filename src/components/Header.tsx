import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full px-20">
      <div className="flex items-center justify-between border-b border-divider py-4">
        <Link href="/">
          <h1 className="font-bold text-2xl">Verbalizelt</h1>
        </Link>
        <div className="flex items-center gap-10">
          <Link
            className="hover:border-b hover:border-yellow hover:pb-[5px]"
            href="/service"
          >
            Service
          </Link>
          <Link
            className="hover:border-b hover:border-yellow hover:pb-[5px]"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="hover:border-b hover:border-yellow hover:pb-[5px]"
            href="/about-us"
          >
            About Us
          </Link>
          <Link
            className="hover:border-b hover:border-yellow hover:pb-[5px]"
            href="/contact"
          >
            Contact
          </Link>
        </div>
        <button className="button">Register</button>
      </div>
    </div>
  );
};

export default Header;
