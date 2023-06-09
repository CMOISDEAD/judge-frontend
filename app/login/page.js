"use client";
import { useState } from "react";
import jwt from "jsonwebtoken";
import { Input } from "../../components/Input";
import { useAppStore } from "@/store/store";
import { useRouter } from "next/navigation";

export default function Login() {
  const [user, setUser] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/auth/login", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        const token = data.access_token;
        jwt.verify(token, "secret", (err, decoded) => {
          if (err) throw err;
          const { sub, username, email } = decoded;
          useAppStore.setState({ user: { id: sub, username, email } });
          return router.push("/");
        });
      })
      .catch((e) => console.error(e));
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
            onChange={handleChange}
          />
          <Input
            type="password"
            id="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
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
