"use client";
import { SiCodeberg } from "react-icons/si";
import { ChangeLang } from "./ChangeLang";
import Link from "next/link";
import { useAppStore } from "@/store/store";
import { shallow } from "zustand/shallow";

export const Navbar = () => {
  const user = useAppStore((state) => state.user, shallow);

  return (
    <div className="flex justify-between px-5 py-2">
      <Link
        href="/"
        className="flex gap-2 content-center items-center hover:text-blue-500 transition-colors"
      >
        <SiCodeberg />
        <div className="uppercase font-bold cursor-pointer">xcution</div>
      </Link>
      <div className="flex-grow-0">
        <ChangeLang />
      </div>
      <div className="flex content-center items-center gap-1">
        {user.isAuth ? (
          <p>{user.username}</p>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </div>
  );
};
