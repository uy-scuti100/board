import React from "react";
import {
  MdArrowDropUp,
  MdOutlineAccountBalanceWallet,
  MdOutlineMonetizationOn,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { BiUser } from "react-icons/bi";

const Widgets = ({ type }) => {
  let data;
  if (type === "user") {
    data = {
      title: "USERS",
      isMoney: false,
      link: "See all users",
      icon: (
        <div className="bg-red-100 flex items-center justify-center text-redo self-end p-2 rounded-md">
          <BiUser />
        </div>
      ),
    };
  } else if (type === "order") {
    data = {
      title: "ORDERS",
      isMoney: false,
      link: "View all orders",
      icon: (
        <div className="bg-yellow-100 text-amber-500 p-2  flex items-center justify-center self-end rounded-md">
          <MdOutlineShoppingCart />
        </div>
      ),
    };
  } else if (type === "earnings") {
    data = {
      title: "EARNINGS",
      isMoney: true,
      link: "View net earnings",
      icon: (
        <div className="bg-lime-200 text-lime-900  flex items-center justify-center self-end p-2 rounded-md">
          <MdOutlineMonetizationOn />
        </div>
      ),
    };
  } else if (type === "balance") {
    data = {
      title: "BALANCE",
      isMoney: true,
      link: "See details",
      icon: (
        <div className="bg-purple-100 text-purple-900 self-end  flex items-center justify-center p-2 rounded-md">
          <MdOutlineAccountBalanceWallet />
        </div>
      ),
    };
  } else {
    data = null;
  }

  //   temporary data
  const amount = 200;
  const diff = 30;

  return (
    <div className="flex justify-between p-2 md:p-4 w-[250px] shadow-lg rounded-md h-[120px]">
      <div className=" flex flex-col justify-between ">
        <div className="text-[12px] md:text-[14px] text-[#777]">
          {data.title}
        </div>
        <div className="font-[300] text-[28px] ">
          {data.isMoney && "$"} {amount}
        </div>
        <div className="text-[12px] text-[#777] border-b border-gray max-w-max cursor-pointer">
          {data.link}
        </div>
      </div>
      <div className=" flex flex-col justify-between">
        <div className="flex items-center text-[14px] negative">
          <MdArrowDropUp />
          {diff} %
        </div>
        <div>{data.icon}</div>
      </div>
    </div>
  );
};

export default Widgets;
