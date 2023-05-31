import { AiOutlineCheckCircle } from "react-icons/ai";
import Link from "next/link";

const challenges = [
  {
    title: "Palindrome Number",
    level: "Easy",
    lang: "Java",
  },
  {
    title: "Sum Of A Sequence",
    level: "Easy",
    lang: "C",
  },
  {
    title: "Product Of Largest Pair",
    level: "Medium",
    lang: "Python",
  },
  {
    title: "Checkerboard Resolution",
    level: "Hard",
    lang: "C++",
  },
];

export const Challenges = () => {
  return (
    <table className="table-local w-full">
      <thead className="uppercase border-b border-gray-500/50 text-left">
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
              <Link href="/workspace">
                <div className="hover:text-blue-500 hover:underline">
                  {challenge.title}
                </div>
              </Link>
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
  );
};
