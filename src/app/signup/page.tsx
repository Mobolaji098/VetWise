"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Image from "next/image";
import Navbar from "../components/landingpage/navbar";
export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {
    try {
      // const response = await axios.post("/api/users/signup", user);
      // console.log(response);

      axios
        .post("/api/users/signup", user)
        .then(function (response) {
          toast.success("user registered");
          router.push("/login");
        })
        .catch(function (error) {
            console.log(error);
            
          toast.error(error.response.data.message);
        });
      
    } catch (error: any) {
      console.log("Signup failed", error.message);
    }
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex  px-32 flex-row py-56 min-w-full min-h-screen gap-5 justify-around bg-white">
        <div className="flex w-1/2">
          <Image
            src={"/pexels-kelly-cormier-1095134322-20681882.jpg"}
            width={2000}
            height={7200}
            alt="profile picture"
            className="rounded-md"
          />
        </div>

        <div className="flex justify-center  p-12 flex-col gap-5 shadow-sm w-1/2">
          <label htmlFor="username" className="font-bold">
            Username
          </label>
          <input
            className="px-3 py-3 border rounded-sm border-grey text-black"
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="username"
          />
          <label htmlFor="email" className="font-bold" >Email</label>
          <input
            className="px-3 py-3 border rounded-sm border-grey text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="email"
          />
          <label htmlFor="password" className="font-bold" >Password</label>
          <input
            className="px-3 py-3 border rounded-sm border-grey text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="password"
          />

          <button
            className="bg-pink-700 py-4 rounded-md mt-5"
            onClick={onSignup}
          >
            Sign Up
          </button>

          {/* <Link href="/login">Visit login page</Link> */}
        </div>
      </div>
    </div>
  );
}
