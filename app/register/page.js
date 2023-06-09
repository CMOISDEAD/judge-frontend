"use client";
import { useState } from "react";
import jwt from "jsonwebtoken";
import { Input } from "../../components/Input";
import { useAppStore } from "@/store/store";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
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
    fetch("http://localhost:8080/auth/register", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then(() => {
        router.push("/login");
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="h-[90vh] flex justify-center content-center items-center">
      <div className="bg-neutral-900 p-5 rounded">
        <h2 className="text-center font-bold text-2xl">Register</h2>
        <form onSubmit={handleSubmit} method="post">
          <Input
            type="text"
            id="username"
            placeholder="username"
            name="username"
            onChange={handleChange}
          />
          <Input
            type="text"
            id="email"
            placeholder="email"
            name="email"
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
            Register
          </button>
          <div className="text-xs text-neutral-500 inline-flex gap-2">
            <p>You have an account?</p>
            <Link
              href="/login"
              className="text-neutral-400 hover:text-underline"
            >
              click here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
