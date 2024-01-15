import Image from "next/image";
import Logo from "@/components/icons/logo";
import { UserPlus, BarChart, Book, MessageSquare, Bell, Search } from "react-feather";
import srcAvatar from "@/public/assets/img/avatar.png";

export default function () {
  return (
    <div className="bg-[#EBEBF4] p-12">
      {/* <div className="container mx-auto flex justify-between px-8 pb-8"> */}
      <div class="container mx-auto grid grid-cols-5 px-8 pb-8 gap-x-8">
        <div>
          <Logo className="pb-2.5" />
          <p>Lorem ipsum dolor sit amet consectetur. Lectus facilisi id bibendum quis consectetur egestas.</p>
        </div>
        <div>
          <p className="text-[18px] font-medium text-[#3B368D] leading-[18px] pb-2.5">Business</p>
          <p className="pb-2.5">Hire</p>
          <p className="pb-2.5">Training</p>
          <p>Scaling</p>
        </div>
        <div>
          <p className="text-[18px] font-medium text-[#3B368D] leading-[18px] pb-2.5">Business</p>
          <p className="pb-2.5">Hire</p>
          <p className="pb-2.5">Training</p>
          <p>Scaling</p>
        </div>
        <div>
          <p className="text-[18px] font-medium text-[#3B368D] leading-[18px] pb-2.5">Business</p>
          <p className="pb-2.5">Hire</p>
          <p className="pb-2.5">Training</p>
          <p>Scaling</p>
        </div>
        <div>
          <p className="text-[18px] font-medium text-[#3B368D] leading-[18px] pb-2.5">Follow us</p>
        </div>
      </div>
      <p className="text-center">
        Copyright © All rights reserved by{" "}
        <a href="#" className="text-[#4193F6] underline">
          Salesmagiq
        </a>
      </p>
    </div>
  );
}
