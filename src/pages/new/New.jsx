import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { MdOutlineDriveFolderUpload } from "react-icons/md";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-6 mt-[50px]">
        <Navbar />
        <div className="wide">
          <div className="shadow-lg p-[10px] md:p-[20px]">
            <h1 className=" text-gray font-bold text-[10px] md:text-[16px]">
              {title}
            </h1>
          </div>
          <div className="flex flex-col md:flex-row mt-5 md:mt-10 gap-3">
            <div className="shadow-lg basis-1/3 flex items-start justify-center py-3">
              <img
                src={file ? URL.createObjectURL(file) : "/images/download.webp"}
                alt="/"
                className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-full object-cover"
              />
            </div>
            <div className="shadow-lg basis-2/3  md:py-3">
              <form className="flex  justify-between md:justify-around flex-wrap gap-3 md:gap-5 p-5 ">
                <div className="pb-5 w-full md:w-[40%]">
                  <label
                    className="mr-[15px] text-[10px] md:text-[16px]"
                    htmlFor="image"
                  >
                    Image: &nbsp;
                    <MdOutlineDriveFolderUpload className="inline-block text-[13px] md:text-[24px]" />
                  </label>
                  <input
                    type="file"
                    id="image"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="hidden"
                  />
                </div>

                {inputs.map((input) => (
                  <div
                    key={input.id}
                    className="flex flex-col gap-2 text-[10px] md:text-[16px] mb-5  md:w-[40%]"
                  >
                    <label className="mr-[15px]">{input.label}</label>
                    <input
                      type={input.type}
                      placeholder={input.placeholder}
                      className="p-1 text-[12px] border-b border-gray border-solid focus:border-b focus:outline-none
                "
                    />
                  </div>
                ))}
                <button className="w-[150px] p-[10px] border-none bg-teal-700 text-white uppercase font-bold tracking-widest md:self-center my-5">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
