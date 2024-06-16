"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Navbar from "../components/landingpage/navbar";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  console.log(loading);

  const onLogin = async () => {
    try {
      setLoading(true);
      axios
        .post("/api/users/login", user)
        .then(function (response) {
          toast.success("success");
          router.push("/login");
        })
        .catch(function (error) {
          console.log(error);
          toast.error(error.response.data.message);
        });
    } catch (error: any) {
      console.log("Login failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex  px-32 flex-row py-56 min-w-full min-h-screen  gap-5 bg-white">
        <div className="flex w-1/2">
          <Image
            src={"/pexels-kelly-cormier-1095134322-20681882.jpg"}
            width={2000}
            height={7200}
            alt="profile picture"
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center shadow-lg min-w-96 p-10 ml-10  py-2">
          <h1 className="text-black font-bold text-xl">
            {loading ? "Processing" : "Login"}
          </h1>

          <label htmlFor="email" className="font-bold text-black">
            Email
          </label>
          <input
            className="px-3 py-3  rounded-sm shadow-inner bg-white text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="email"
          />
          <label htmlFor="password" className="font-bold text-black">
            Password
          </label>
          <input
            className="px-3 py-3 rounded-sm shadow-inner text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="password"
          />
          <button
            className="bg-pink-600 px-3 py-2 rounded-sm"
            onClick={onLogin}
          >
            Login
          </button>
          <Link href="/signup" className="text-gray-500 underline ">
            {" "}
            Visit signup page{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
