import { AiOutlineCheckCircle } from "react-icons/ai";
import { challenges } from "../utils/challenges";
import Link from "next/link";

export const Challenges = () => {
  return (
    <>
      <div className="text-neutral-500 text-sm text-center pb-7">
        If you're new to this application and want to dive into programming,
        here are some initial challenges you can take on.
        <br />
        These challenges will help you build a strong foundation in programming
        and problem-solving.
      </div>
      <div className="bg-neutral-900 rounded px-4 py-2 my-2">
        <table className="table-local w-full">
          <thead className="uppercase border-b border-gray-500/50 text-left p-5">
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Lang</th>
              <th>Difficult</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {challenges.map((challenge, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <div className="hover:text-blue-500 hover:underline w-auto">
                    <Link href="/workspace">{challenge.title}</Link>
                  </div>
                </td>
                <td>{challenge.lang}</td>
                <td>{challenge.level}</td>
                <td className="text-center inline-flex">
                  <AiOutlineCheckCircle />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
