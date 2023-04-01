import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  MdOutlineDarkMode,
  MdOutlineList,
  MdOutlineFullscreenExit,
  MdOutlineLanguage,
  MdOutlineNotificationsNone,
  MdOutlineMenu,
  MdClose,
  MdChatBubbleOutline,
} from "react-icons/md";

const Navbar = () => {
  const [isPopOpen, setIsPopOpen] = useState(false);
  const [isToggleButton, setIsToggleButton] = useState(false);
  const handlePop = () => {
    setIsPopOpen((prevState) => !prevState);
    setIsToggleButton((prevState) => !prevState);
  };
  return (
    <div>
      <div className="flex items-center justify-between px-2 md:px-4 h-[50px] border-b border-[#89a25a] text-[14px] fixed top-0 left-0 right-0  ml-[68px] md:ml-[142px] bg-white z-50">
        <div className=" flex items-center border border-[#b6b6b6] px-2 rounded ">
          <input
            type="text"
            placeholder="search..."
            className="border-none outline-none placeholder:text-[12px] bg-transparent text-[#777] w-[100px] md:w-auto"
          />
          <AiOutlineSearch size={20} className="text-redo cursor-pointer " />
        </div>

        <div className="md:flex items-center space-x-4">
          <div className="items-center gap-1 hidden md:flex ">
            <MdOutlineLanguage size={20} className=" cursor-pointer" />
            English
          </div>
          <div>
            <MdOutlineDarkMode
              size={20}
              className="cursor-pointer hidden md:flex "
            />
          </div>
          <div>
            <MdOutlineFullscreenExit
              size={20}
              className="cursor-pointer hidden md:flex "
            />
          </div>
          <div className="flex items-center  relative">
            <MdOutlineNotificationsNone
              size={20}
              className="cursor-pointer hidden md:flex "
            />
            <div className=" h-[15px] w-[15px] rounded-full bg-redo text-white font-medium items-center justify-center absolute -top-[5px] -right-2 text-[10px] hidden md:flex">
              1
            </div>
          </div>
          <div className="flex items-center relative">
            <MdChatBubbleOutline
              size={20}
              className="cursor-pointer hidden md:flex "
            />
            <div className=" h-[15px] w-[15px] rounded-full bg-redo text-white font-medium items-center justify-center absolute -top-[5px] -right-2 text-[10px] hidden md:flex">
              2
            </div>
          </div>
          <div>
            <MdOutlineList
              size={20}
              className="cursor-pointer hidden md:flex "
            />
          </div>
          <div>
            <img
              src="images/IMG_E0142.JPG"
              alt="avatar"
              className="w-[30px] h-[30px] rounded-full object-cover cursor-pointer md:flex hidden"
            />
          </div>
        </div>
        <div onClick={handlePop} className="md:hidden flex items-center">
          {isToggleButton ? (
            <MdClose
              size={24}
              className="text-redo transition-transform ease duration-1000"
            />
          ) : (
            <MdOutlineMenu
              size={24}
              className="text-redo transition-transform ease duration-1000"
            />
          )}
          <div className="ml-[8px]">
            <img
              src="/images/IMG_E0142.jpg"
              alt="avatar"
              className="w-[30px] h-[30px] rounded-full object-cover cursor-pointer flex md:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
