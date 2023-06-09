import { useAppStore } from "@/store/store";
import Link from "next/link";
import { shallow } from "zustand/shallow";

export const UserBadge = () => {
  const user = useAppStore((state) => state.user, shallow);

  return (
    <Link
      href="/user"
      className="flex justify-start content-center items-center gap-4 bg-neutral-800 rounded px-3 py-1 border border-transparent hover:border-blue-500 hover:cursor-pointer"
    >
      <img
        src="https://avatars.githubusercontent.com/u/51010598?v=4"
        alt="user image"
        width={32}
        className="rounded"
      />
      <div className="user-info flex flex-col">
        <p className="font-bold text-xs">{user.username}</p>
        <p className="text-xs">10 points</p>
      </div>
    </Link>
  );
};
