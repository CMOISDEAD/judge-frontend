"use client";
import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Input } from "../../components/Input";
import { langList } from "../../utils/langs";
import { useAppStore } from "../../store/store";
import { shallow } from "zustand/shallow";

export default function User() {
  const prefLang = useAppStore((state) => state.prefLang, shallow);
  const [selectLang, setSelectLang] = useState(prefLang);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectLang(value);
  };

  return (
    <main className="container mx-auto my-5">
      <div className="bg-neutral-900 p-5 rounded">
        <h3 className="text-2xl font-bold capitalize">Add Challenge</h3>
        <div className="text-sm text-neutral-500">
          Add a challenge to the database and conquer all...
        </div>
        <div className="my-2 grid grid-cols-2 grid-flow-row gap-4">
          <Input
            type="text"
            id="title"
            placeholder="Palindrome Number"
            name="title"
            margin={false}
          />
          <div>
            <label
              for="langs"
              className="block mb-2 text-sm font-medium text-white capitalize"
            >
              Select Language
            </label>
            <select
              id="langs"
              className="bg-neutral-950 border border-neutral-800 text-neutral-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={handleChange}
            >
              {langList.map((value) => (
                <option value={value} key={value} selected={prefLang == value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-full h-full">
            <p className="block mb-2 text-sm font-medium text-white capitalize">
              base code
            </p>
            <Editor theme="vs-dark" height="30vh" language={selectLang} />
          </div>
          <div className="col-span-full">
            <label
              for="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              className="block p-2.5 w-full text-sm text-neutral-500 bg-neutral-950 rounded-lg border border-neutral-800 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <Input
            type="text"
            id="expected"
            placeholder="true"
            name="expected"
            margin={false}
          />
        </div>
        <button className="w-full bg-blue-500 rounded px-3 py-1 hover:bg-blue-700 transition my-1">
          Add a challenge
        </button>
        <p className="text-xs text-neutral-500 text-center">
          The challenge will go to revision first.
        </p>
      </div>
    </main>
  );
}
