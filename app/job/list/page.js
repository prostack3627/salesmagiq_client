"use client";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { Router, useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { UserPlus, Briefcase, Layout, DollarSign, Edit, Search } from "react-feather";
import { useEffect, useState } from "react";

export default function () {
  const router = useRouter();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/api/job/list",
    }).then(function (response) {
      console.log(response.data.data);
      setJobs(response.data.data);
    });
  }, []);

  // const jobs = [
  //   {
  //     title: "Looking for front end Engineer",
  //     description:
  //       "We are currently seeking a talented and passionate frontend developer to join our team. As a frontend developer, you will be responsible for creating visually appealing and user-friendly interfaces that enhance the overall user experience of our web applications.",
  //     salary: "fixed 30$",
  //   },
  //   {
  //     title: "Looking for back end Engineer",
  //     description:
  //       "We are currently seeking a talented and passionate frontend developer to join our team. As a frontend developer, you will be responsible for creating visually appealing and user-friendly interfaces that enhance the overall user experience of our web applications.",
  //     salary: "fixed 30$",
  //   },
  // ];

  return (
    <>
      <Header />
      <div className="w-full py-8 relative">
        <div className="listBack absolute top-0 left-0 right-0 bottom-0"></div>
        <div className="container mx-auto px-8 ">
          <div className="flex mb-6">
            <div className="rounded-2xl bg-[#EBEBF4] p-3">
              <UserPlus size={40} color="#3B368D" />
            </div>
            <div className="px-6">
              <p className="text-[32px] leading-8 mb-2">My Jobs</p>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur. Tellus nulla ipsum faucibus consectetur. Felis nunc in tempor
                aenean purus.
              </p>
            </div>
          </div>
          <div className="flex gap-x-2.5">
            <button className="px-6 py-1 bg-[#0A50A4] hover:bg-[#274469] text-[#E7EEF6] text-[14px] rounded-lg">
              Dashboard
            </button>
            <button
              className="px-6 py-1 bg-[#CEDCED] hover:bg-[#bcd0e9] text-[#0A50A4] text-[14px] rounded-lg"
              // onClick={() => {
              //     router.push("/job/list");
              // }}
            >
              My Jobs
            </button>
            <button className="px-6 py-1 bg-[#CEDCED] hover:bg-[#bcd0e9] text-[#0A50A4] text-[14px] rounded-lg">
              Applicants
            </button>
            <button className="px-6 py-1 bg-[#CEDCED] hover:bg-[#bcd0e9] text-[#0A50A4] text-[14px] rounded-lg">
              Interviews
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA] listHeight">
        <div className="container mx-auto p-8">
          <div className="bg-white rounded-2xl p-6 text-[#4C4C4C]">
            <div className="flex mb-3 items-center justify-between">
              <div className="flex gap-3 items-center border-[#3B368D]">
                <Edit size={16} />
                <p className="text-nowrap overflow-hidden">My All Jobs</p>
              </div>
              <div className="flex gap-2.5 ">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="border-[#D8D7E8] border rounded-lg p-1 text-[14px] pl-6"
                  ></input>
                  <div className="absolute top-0 left-2 bottom-0 grid place-items-center">
                    <Search size={16} color="gray" />
                  </div>
                </div>
                <select className="border-[#D8D7E8] border rounded-lg p-1 text-[14px]">
                  <option value="Filter">Filter</option>
                </select>
                <button
                  className="bg-[#3B368D] hover:bg-[#282563] text-white px-6 py-1 rounded-lg text-[14px] flex items-center gap-2.5"
                  onClick={() => {
                    router.push("/job/post");
                  }}
                >
                  <Edit size={16} />
                  <p className="text-nowrap overflow-hidden">Post New Job</p>
                </button>
              </div>
            </div>
            {jobs.map((job) => (
              <div className="flex gap-3 py-2">
                <div className="bg-[#EBEBF4] basis-10 h-10 border-2 border-[#8986BB] rounded-full items-center justify-center flex grow-0 shrink-0">
                  <Briefcase size={24} color="#8986BB" />
                </div>
                <div className="grow shrink">
                  <div className="flex mb-2 justify-between">
                    <p className="text-xl leading-5 text-[#4C4C4C]">{job.title}</p>
                    <div className="flex gap-2 items-center">
                      <DollarSign size={13.5} />
                      <div className="bg-[#B3B3B3] text-white text-[12px] px-4 py-0.5 rounded-xl text-nowrap overflow-hidden">
                        {job.salary}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Layout size={18} />
                    <p className="text-[12px] text-[#B3B3B3] text-ellipsis leading-3 font-light">{job.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
