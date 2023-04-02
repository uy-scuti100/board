import React from "react";
import {
  MdArrowDropDown,
  MdArrowDropUp,
  MdOutlineMoreVert,
} from "react-icons/md";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="md:basis-2/6 p-2">
      <div className="flex justify-between items-center text-gray text-[16px] font-medium">
        Total Revenue <MdOutlineMoreVert style={{ cursor: "pointer" }} />
      </div>
      <div className="p-5 flex flex-col items-center gap-5 justify-center">
        <div className="h-[100px] w-[100px]">
          <CircularProgressbar
            value={60}
            text={"60%"}
            strokeWidth={3}
            borderColor="#f44336"
            styles={buildStyles({
              pathColor: "#f44336",
              strokeLinecap: "butt",
              pathTransitionDuration: 0.5,
              trailColor: "#d6d6d0",
              transition: "stroke-dashoffset 0.5s ease 0s",
              // Rotate the path
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            })}
          />
        </div>
        <p className=" font-medium text-gray">Total Sales Today</p>
        <p className=" text-[30px]">$750</p>
        <p className="text-[12px] text-gray text-center">
          Previous transactions still in process. Last Payments may not yet be
          included.
        </p>
        <div className="flex justify-between w-full">
          <div className="flex flex-col items-center">
            <div className="text-[12px] text-gray">Target</div>
            <div className="flex flex-col items-center positive ">
              <MdArrowDropUp />
              <p className="text-[12px] md:text-[14px] ">$13.98k</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-[12px] text-gray">last 7 Days</div>
            <div className="flex flex-col items-center negative">
              <MdArrowDropDown />
              <p className="text-[12px] md:text-[14px]"> $2.76k</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-[12px] text-gray">Last 30 Days</div>
            <div className="flex flex-col items-center positive">
              <MdArrowDropUp />
              <p className="ext-[12px] md:text-[14px]"> $10.23k</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
