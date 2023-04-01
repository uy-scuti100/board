import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widgets from "../../components/widgets/Widgets";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-6 ml-[60px] md:ml-[140px] mt-[50px]">
        <Navbar />
        <div className="flex flex-1 p-2 py-5 flex-col md:flex-row gap-5 justify-between">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earnings" />
          <Widgets type="balance" />
        </div>
        <div className="py-2 px-3 md:py-4 md:px-2 flex flex-col md:flex-row">
          <Featured />
          <Chart />
        </div>
        <div className="shadow-lg p-2 py-5 ">
          <div className="text-gray text-[12px] md:text-[14px] mb-4">
            Recent Transactions{" "}
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
