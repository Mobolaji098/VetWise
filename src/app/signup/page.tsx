"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import {toast} from 'react-hot-toast';

export default function SignupPage() {
    
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    

    const onSignup = async () => {
        try {            
            // const response = await axios.post("/api/users/signup", user);
            // console.log(response);

            axios.post('/api/users/signup', user)
              .then(function (response) {
                toast.success("user registered")
              })
              .catch(function (error) {
                toast.error(error.response.data.message);
              });
            // router.push("/login");

            // const response = await fetch("/api/users/signup", {
            //     method: "POST",
            //     headers: {
            //       "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(user),
            //   });

            //   console.log(await response.json());
              
        
            //   if (response.ok) {
            //     const result = await response.json();
        
            //     console.log(result);
            //   }
        
            //   if (!response.ok) {
            //     throw new Error("Failed to submit the data. Please try again.");
            //   }
           
            
        } catch (error:any) {
            console.log("Signup failed", error.message);
        }
    }


    return (
        <div className="flex flex-row">
            <div className="flex w-1/2">

            </div>
    <div className="flex justify-center  p-28 flex-col">
        <label htmlFor="username">username</label>
        <input
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username"
            />
        <label htmlFor="email">email</label>
        <input 
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />
        <label htmlFor="password">password</label>
        <input 
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            <button onClick={onSignup}>Sign Up</button>

            <Link href="/login">Visit login page</Link>
        </div>
        </div>
    )

}