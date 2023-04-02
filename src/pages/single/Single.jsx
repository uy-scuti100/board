import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Single = () => {
  return (
    <div>
      <div className="flex w-full ">
        <Sidebar />
        <div className="flex-6 mt-[50px]">
          <Navbar />
          {/* top  */}
          <div className="flex gap-3 flex-col md:flex-row">
            {/* left */}
            <div className="relative p-[20px] px-[30px] flex flex-col gap-5 basis-1/3 shadow-lg rounded-md">
              <p className="absolute top-1 right-2 bg-blue-200 p-1 cursor-pointer rounded-md text-[10px] text-blue-800">
                edit
              </p>
              <h1 className="text-[20px] text-gray font-bold mb-[20px]">
                Information
              </h1>
              <div className="flex gap-4">
                <div className="w-[105px] md:w-[200px]">
                  <img
                    src="/images/umbrella.jpg"
                    alt="/"
                    className=" w-[70px] h-[70px] md:w-[120px] md:h-[120px] rounded-full cursor-pointer object-cover"
                  />
                </div>
                <div>
                  <p className="mb-[10px] font-bold text-[#555]">Jane Doe</p>
                  <div className="mb-[10px]">
                    <span className="font-bold text-gray text-[12px] mr-2">
                      Email:
                    </span>
                    <span className="font-bold text-gray text-[12px]">
                      janedoe@gmail.com
                    </span>
                  </div>
                  <div className="mb-[10px]">
                    <span className="font-bold text-gray text-[12px] mr-2">
                      Phone:
                    </span>
                    <span className="font-bold text-gray text-[12px]">
                      +1 2345 67 89
                    </span>
                  </div>
                  <div className="mb-[10px]">
                    <span className="font-bold text-gray text-[12px] md:text-[14px] mr-2">
                      Address:
                    </span>
                    <span className="font-bold text-gray text-[12px]">
                      Anderson St. 765 Allen Ave. camden
                    </span>
                  </div>
                  <div className="mb-[10px]">
                    <span className="font-bold text-gray text-[12px] mr-2">
                      Country:
                    </span>
                    <span className="font-bold text-gray text-[12px]">UK</span>
                  </div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="basis-2/3 shadow-lg rounded-md">
              <Chart aspect={3 / 1} title="User Spending (last 6 months) " />
            </div>
          </div>
          {/* bottom */}
          <div className="shadow-lg p-[20px] rounded-md mt-[10px] mb-[30px]">
            <h1 className="text-[20px] text-gray font-bold mb-[20px]">
              Last Transactions
            </h1>
            <Table style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
