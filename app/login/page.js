"use client";
import { Input } from "../components/Input";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-[90vh] flex justify-center content-center items-center">
      <div className="bg-neutral-900 p-5 rounded">
        <h2 className="text-center font-bold text-2xl">Login</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            id="username"
            placeholder="username"
            name="username"
          />
          <Input
            type="text"
            id="email"
            placeholder="jhon.doe@email.com"
            name="email"
          />
          <Input
            type="password"
            id="password"
            placeholder="password"
            name="password"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 rounded px-3 py-1 hover:bg-blue-700 transition"
          >
            Login
          </button>
          <div className="text-xs text-neutral-500 inline-flex gap-2">
            <p>dont have an account?</p>
            <a href="#" className="text-neutral-400 hover:text-underline">
              click here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
