"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { Search } from "react-feather";
import axios from "axios";
import qs from "qs";
import Logo from "@/components/icons/logo";
import Google from "@/components/icons/google";
import Facebook from "@/components/icons/facebook";

export default function Home() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const LogIn = () => {
    if (!email) {
      toast.error("Please input email!");
      return;
    }
    if (!pwd) {
      toast.error("Please input password");
      return;
    }
    axios({
      method: "post",
      url: "http://localhost:8080/api/auth/signin",
      data: {
        email: email,
        pwd: pwd,
      },
    }).then(function (response) {
      if (response.data.success) toast.success(response.data.message);
      else toast.error(response.data.message);
    });
  };

  return (
    <main className="h-screen bg-[#EBEBF4] grid place-items-center">
      <div className="w-[721px] p-6 flex bg-white rounded-xl">
        <div className="basis-[246px]">
          <img src="/assets/img/img1.png" alt="leftimg" className="object-cover h-full" />
        </div>
        <div className="grow pl-6 bg-white space-y-6 text-[14px] leading-[14px]">
          <div className="pt-6 flex justify-center">
            <Logo />
          </div>
          <div className="text-center">
            <p className="text-base text-[#0A50A4] font-semibold">Welcome to back</p>
            <p className="text-[#B3B3B3] text-[10px]">Sign in to continue</p>
          </div>
          <div>
            <div>
              <label htmlFor="title">Email Address</label>
              <div className="relative">
                <input
                  placeholder="Please input here."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-[10px] py-[7px] pl-8 rounded-lg border-gray-300 border w-full mb-[18px]"
                ></input>
                <div className="absolute top-0 left-3 bottom-0 grid place-items-center">
                  <Search size={20} color="#fff" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="title">User Password</label>
              <input
                placeholder="Please input here."
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                className="mt-[10px] py-[7px] pl-8 rounded-lg border-gray-300 border w-full mb-6"
              ></input>
            </div>
            <button
              className="bg-[#3B368D] hover:bg-[#2a2766] rounded-lg w-full text-[#EBEBF4] py-2 px-6"
              onClick={LogIn}
            >
              Login
            </button>
          </div>
          <div className="flex items-center">
            <div className="grow h-px bg-gray-400"></div>
            <div className="px-2 text-gray-400">or</div>
            <div className="grow h-px bg-gray-400"></div>
          </div>
          <div>
            <button className="rounded-lg w-full text-[#3B368D] py-2 px-6 border border-gray-300 flex items-center justify-center my-3">
              <div className="px-2">
                <Google />
              </div>
              Google
            </button>
            <button className="rounded-lg w-full text-[#3B368D] py-2 px-6 border border-gray-300 flex items-center justify-center">
              <div className="px-2">
                <Facebook />
              </div>
              Facebook
            </button>
          </div>
          <div className="text-center">
            Don't you have an account? &nbsp;
            <a href="/auth/signup" className="underline text-[#4193F6] font-medium">
              Sign up
            </a>
          </div>
        </div>
        <ToastContainer />
      </div>
    </main>
  );
}
