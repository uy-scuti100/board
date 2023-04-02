import React from "react";
import {
  MdDashboard,
  MdInsertChartOutlined,
  MdOutlineLocalShipping,
  MdNotificationsNone,
  MdPsychology,
  MdAccountCircle,
  MdExitToApp,
  MdSettingsSuggest,
} from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { BsCreditCard } from "react-icons/bs";
import { RiUserSettingsLine } from "react-icons/ri";
import { FaStoreAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex-6 border-r border-[#89a25a] min-h-[100%]  bg-white">
      <div className="h-[50px] md:h-[50px] px-1 flex items-center justify-center">
        <Link to="/">
          <span className="text-[16px] md:text-[18px] font-bold text-redo font-[inter]">
            Regizta
          </span>
        </Link>
      </div>
      <hr />
      <div className="pl-[10px] text-[12px] md:text-[12px]">
        <ul>
          <p className="text-[10px] text-[#999] mt-[15px] mb-[5px]">MAIN</p>
          <Link to="/">
            <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
              <MdDashboard className="inline-block text-redo text-[18px]" />
              <span className="hidden  md:block text-[13px] text-[#888] font-normal ml-[10px]">
                {" "}
                Dashboard{" "}
              </span>
            </li>
          </Link>
          <p className="text-[10px] text-[#999] mt-[15px] mb-[5px]">OPTIONS</p>
          <Link to="/users">
            <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
              <BiUser className="inline-block text-redo text-[18px]" />
              <span className="hidden  md:block text-[13px] text-[#888] font-normal ml-[10px]">
                {" "}
                Users
              </span>
            </li>
          </Link>
          <Link to="/products">
            <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
              <FaStoreAlt className="inline-block text-redo text-[18px]" />
              <span className="hidden  md:block text-[13px] text-[#888] font-normal ml-[10px]">
                {" "}
                Products
              </span>
            </li>
          </Link>
          <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
            <BsCreditCard className="inline-block text-redo text-[18px]" />
            <span className="hidden  md:block text-[13px] text-[#888] font-normal ml-[10px]">
              {" "}
              Orders
            </span>
          </li>
          <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
            <MdOutlineLocalShipping className="inline-block text-redo text-[18px]" />
            <span className="hidden  md:block text-[13px] text-[#888] font-normal ml-[10px]">
              {" "}
              Delivery
            </span>
          </li>
          <p className="text-[10px] text-[#999] mt-[15px] mb-[5px]">LINKS</p>
          <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
            <MdInsertChartOutlined className="inline-block text-redo text-[18px]" />
            <span className="hidden  md:block text-[13px] text-[#888] font-normal ml-[10px]">
              {" "}
              Stats
            </span>
          </li>
          <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
            <MdNotificationsNone className="inline-block text-redo text-[18px]" />
            <span className="hidden  md:block text-[13px] text-[#888] font-normal ml-[10px]">
              {" "}
              Notifications{" "}
            </span>
          </li>
          <p className="text-[10px] text-[#999] mt-[15px] mb-[5px]">SERVICE</p>
          <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
            <MdSettingsSuggest className="inline-block text-redo text-[18px]" />
            <span className="hidden  md:block text-[13px] text-[#888] font-normal ml-[10px]">
              System Health
            </span>
          </li>
          <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
            <MdPsychology className="inline-block text-redo text-[18px]" />
            <span className="hidden  md:block text-[13px] text-[#888] font-normal ml-[10px]">
              {" "}
              Logs{" "}
            </span>
          </li>
          <li className="flex items-center p-[5px] cursor-pointer hover:bg-[#ece8ff]">
            <RiUserSettingsLine className="inline-block text-redo text-[18px]" />
            <span className="hidden  md:block text-[13px] text-[#888] font-normal ml-[10px]">
              {" "}
              Settings
            </span>
          </li>
          <p className="text-[10px] text-[#999] mt-[15px] mb-[5px]">USER</p>
          <li className="flex items-center p-[5px] hover:bg-[#ece8ff]">
            <MdAccountCircle className="inline-block text-redo text-[18px]" />
            <span className="hidden  md:block text-[13px] text-[#888] font-normal ml-[10px]">
              {" "}
              Profile
            </span>
          </li>
          <li className="flex items-center p-[5px] hover:bg-[#ece8ff]">
            <MdExitToApp className="inline-block text-redo text-[18px]" />
            <span className="hidden  md:block text-[13px] text-[#888] font-normal ml-[10px]">
              {" "}
              Logout
            </span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col m-[10px]">
        <div className="w-[20px] h-[20px] rounded-sm border border-slate-500 cursor-pointer bg-slate-500 m-[5px]"></div>
        <div className="w-[20px] h-[20px] rounded-sm border cursor-pointer bg-black m-[5px]"></div>
      </div>
    </div>
  );
};

export default Sidebar;
