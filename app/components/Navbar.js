import { AiOutlineUser as User } from "react-icons/ai";
import { SiCodeberg } from "react-icons/si";
import { ChangeLang } from "./ChangeLang";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex justify-between px-5 py-2">
      <Link
        href="/"
        className="flex gap-2 content-center items-center hover:text-blue-500 transition-colors"
      >
        <SiCodeberg />
        <div className="uppercase font-bold cursor-pointer">xcution</div>
      </Link>
      <ChangeLang />
      <div className="flex content-center items-center gap-1">
        <User />
        <p>user</p>
      </div>
    </div>
  );
};
