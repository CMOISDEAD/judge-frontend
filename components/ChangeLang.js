"use client";
import { useAppStore } from "../store/store";
import { langList } from "../utils/langs";

export const ChangeLang = () => {
  const handleChange = (e) => {
    const { value } = e.target;
    useAppStore.setState({ prefLang: value });
  };

  return (
    <select
      className="capitalize bg-black border border-transparent border-b-white cursor-pointer hover:border-b-blue-500 hover:transition-colors"
      onChange={handleChange}
    >
      {langList.map((value) => (
        <option value={value} key={value}>
          {value}
        </option>
      ))}
    </select>
  );
};
