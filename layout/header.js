import Image from "next/image";
import Logo from "@/components/icons/logo";
import { UserPlus, BarChart, Book, MessageSquare, Bell, Search } from "react-feather";
import srcAvatar from "@/public/assets/img/avatar.png";

export default function () {
  return (
    <div className="container mx-auto">
      <div className="px-8 py-3.5 flex gap-x-8 items-center">
        <div className="w-[259px] h-[29px]">
          <Logo />
        </div>
        <div className="grow shrink flex justify-end items-center text-[20px] flex-nowrap overflow-hidden">
          <div className="px-[27px] flex items-center my-2 border-b-4 border-[#0A50A4] round">
            <UserPlus size={24} className="pr-1" />
            Hire
          </div>
          <div className="px-[27px] flex items-center">
            <BarChart size={24} className="pr-1" />
            Lead
          </div>
          <div className="px-[27px] flex items-center">
            <Book size={24} className="pr-1" />
            Train
          </div>
          <div className="px-[27px] flex items-center">
            <MessageSquare size={24} className="pr-1" />
            Community
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            className="w-full bg-[#EBEBF4] rounded-3xl placeholder-white px-9 py-1.5"
            placeholder="Search"
          />
          <div className="absolute top-0 left-3 bottom-0 grid place-items-center">
            <Search size={20} color="#fff" />
          </div>
        </div>
        <div>
          <Bell size={24} />
        </div>
        <div className="flex items-center justify-between">
          <Image src={srcAvatar} alt="avatar" width={40} height={40} className="rounded-full" />
          <div className="pl-2">
            <p className="text-[20px] font-medium text-[#4C4C4C] text-nowrap overflow-hidden">John Doe</p>
            <p className="text-[#B3B3B3] text-nowrap overflow-hidden">Hiring Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}
