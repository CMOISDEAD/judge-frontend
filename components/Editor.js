"use client";
import { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";
import { useAppStore } from "../store/store";
import Editor from "@monaco-editor/react";

import { langs } from "../utils/langs";
import { Output } from "./Output";

export const CodeEditor = () => {
  const prefLang = useAppStore((state) => state.prefLang, shallow);
  const [lang, setLang] = useState(langs[prefLang]);
  const [value, setValue] = useState(langs[prefLang].base);
  const [passed, setPassed] = useState(true);
  const [output, setOuput] = useState("no data");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setValue(langs[prefLang].base);
    setLang(langs[prefLang]);
  }, [prefLang]);

  const handleEditorChange = (codeValue) => {
    setValue(codeValue);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("http://localhost:8080/code", {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: value,
        expected: true,
        lang: lang.name,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPassed(data.passed);
        setOuput(data.output);
        setLoading(false);
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="flex flex-col h-full">
      <Editor
        theme="vs-dark"
        language={lang.name}
        value={lang.base}
        onChange={handleEditorChange}
        height={"60vh"}
      />
      <div className="grow">
        <Output output={output} isLoading={isLoading} passed={passed} />
        <footer className="flex justify-end content-center items-center gap-2">
          <button
            className="border border-blue-600 hover:bg-blue-700/5 rounded px-5 capitalize"
            onClick={handleClick}
          >
            test
          </button>
          <button
            className="border border-blue-600 bg-blue-600 hover:bg-blue-700 text-white rounded px-5 capitalize"
            onClick={handleClick}
          >
            attempt
          </button>
        </footer>
      </div>
    </div>
  );
};
