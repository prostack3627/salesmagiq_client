"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";
import { Router, useRouter } from "next/navigation";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Image from "next/image";
import { UserPlus, Briefcase, Layout, DollarSign, Check } from "react-feather";

export default function () {
  const router = useRouter();
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [ste, setSte] = useState("");
  const [zip, setZip] = useState("");
  const [roleType, setRoleType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");

  const Post = () => {
    if (!company) {
      toast.error("Please input company name.");
      return;
    }
    if (!name) {
      toast.error("Please input hiring manager name.");
      return;
    }
    if (!email) {
      toast.error("Please input email.");
      return;
    }
    if (!address) {
      toast.error("Please input address.");
      return;
    }
    if (!city) {
      toast.error("Please input city.");
      return;
    }
    if (!ste) {
      toast.error("Please input stats.");
      return;
    }
    if (!zip) {
      toast.error("Please input zip.");
      return;
    }
    if (!roleType) {
      toast.error("Please input role type.");
      return;
    }
    if (!description) {
      toast.error("Please input job description.");
      return;
    }
    if (!salary) {
      toast.error("Please input salary amount.");
      return;
    }
    axios({
      method: "post",
      url: "http://localhost:8080/api/job/post",
      data: {
        company: company,
        name: name,
        email: email,
        address: address,
        city: city,
        state: ste,
        zip: zip,
        roleType: roleType,
        title: title,
        description: description,
        salary: salary,
      },
    }).then(function (response) {
      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/job/list");
      } else toast.error(response.data.message);
    });
  };

  return (
    <>
      <Header />
      <div className="w-full py-8 relative">
        <div className="postBack absolute top-0 left-0 right-0 bottom-0"></div>
        <div className="container mx-auto px-8 ">
          <div className="flex mb-6">
            <div className="rounded-2xl bg-[#EBEBF4] p-3">
              <UserPlus size={40} color="#3B368D" />
            </div>
            <div className="px-6">
              <p className="text-[32px] leading-8 mb-2">Post New Job</p>
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
      <div className="bg-[#FAFAFA]">
        <div className="container mx-auto p-8">
          <div className="rounded-lg bg-white">
            <div className="py-6">
              <div className="p-6 rounded-lg border-gray-400 border center">
                <p className="pb-1">Company Name</p>
                <input
                  type="text"
                  placeholder="Please input here."
                  onChange={(e) => setCompany(e.target.value)}
                  className="border-[#D8D7E8] border rounded-lg px-4 py-1 text-[14px] mb-3 w-full"
                ></input>
                <p className="pb-1">Hiring Manager Name</p>
                <input
                  type="text"
                  placeholder="Please input here."
                  onChange={(e) => setName(e.target.value)}
                  className="border-[#D8D7E8] border rounded-lg px-4 py-1 text-[14px] mb-3 w-full"
                ></input>
                <p className="pb-1">Email</p>
                <input
                  type="text"
                  placeholder="Please input here."
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-[#D8D7E8] border rounded-lg px-4 py-1 text-[14px] mb-3 w-full"
                ></input>
                <p className="pb-1">Address</p>
                <input
                  type="text"
                  placeholder="Please input here."
                  onChange={(e) => setAddress(e.target.value)}
                  className="border-[#D8D7E8] border rounded-lg px-4 py-1 text-[14px] mb-3 w-full"
                ></input>
                <p className="pb-1">City</p>
                <input
                  type="text"
                  placeholder="Please input here."
                  onChange={(e) => setCity(e.target.value)}
                  className="border-[#D8D7E8] border rounded-lg px-4 py-1 text-[14px] mb-3 w-full"
                ></input>
                <p className="pb-1">State</p>
                <input
                  type="text"
                  placeholder="Please input here."
                  onChange={(e) => setSte(e.target.value)}
                  className="border-[#D8D7E8] border rounded-lg px-4 py-1 text-[14px] mb-3 w-full"
                ></input>
                <p className="pb-1">Zip</p>
                <input
                  type="text"
                  placeholder="Please input here."
                  onChange={(e) => setZip(e.target.value)}
                  className="border-[#D8D7E8] border rounded-lg px-4 py-1 text-[14px] mb-3 w-full"
                ></input>
                <p className="pb-1">Role Type</p>
                <input
                  type="text"
                  placeholder="Please input here."
                  onChange={(e) => setRoleType(e.target.value)}
                  className="border-[#D8D7E8] border rounded-lg px-4 py-1 text-[14px] mb-3 w-full"
                ></input>
                <p className="pb-1">Title</p>
                <input
                  type="text"
                  placeholder="Please input here."
                  onChange={(e) => setTitle(e.target.value)}
                  className="border-[#D8D7E8] border rounded-lg px-4 py-1 text-[14px] mb-3 w-full"
                ></input>
                <p className="pb-1">Job description</p>
                <textarea
                  type="text"
                  placeholder="Please input here."
                  onChange={(e) => setDescription(e.target.value)}
                  className="border-[#D8D7E8] border rounded-lg px-4 py-1 text-[14px] mb-3 w-full"
                ></textarea>
                <p className="pb-1">Salary amount</p>
                <input
                  type="text"
                  placeholder="Please input here."
                  onChange={(e) => setSalary(e.target.value)}
                  className="border-[#D8D7E8] border rounded-lg px-4 py-1 text-[14px] mb-3 w-full"
                ></input>
                <div>
                  <button
                    className="bg-[#3B368D] hover:bg-[#282563] text-white px-6 py-1 rounded-lg text-[14px] flex items-center gap-2.5"
                    onClick={Post}
                  >
                    <Check size={16} />
                    <p className="text-nowrap overflow-hidden">Post New Job</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
}
