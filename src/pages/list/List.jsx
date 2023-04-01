import React from "react";
// import Datatable from "../../components/datatable/Datatable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const List = () => {
  return (
    <div className="flex w-full ">
      <Sidebar />
      <div className="flex-6 ml-[60px] md:ml-[140px] mt-[50px]">
        <Navbar />
        <div className="mx-5 md:mx-2 py-5">{/* <Datatable /> */}</div>
      </div>
    </div>
  );
};

export default List;
