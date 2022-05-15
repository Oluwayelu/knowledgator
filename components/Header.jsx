import Link from "next/link";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bg-blue-500 w-full px-3 lg:px-10 py-5 flex items-center justify-between text-white">
      <Link href="/">
        <a className="text-xl font-bold">Text Decoration Editor</a>
      </Link>
    </div>
  );
};

export default Header;
