import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColumns } from "../../datatableSource";
import { Link } from "react-router-dom";

const Datatable = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-5">
            <Link to="/users/single">
              <div className="py-[2px] px-[5px] rounded-md text-blue-800 border border-double border-blue-500 cursor-pointer">
                View
              </div>
            </Link>
            <div
              className="py-[2px] px-[5px] rounded-md text-red-800 border border-double border-red-200  cursor-pointer"
              onClick={() => handleDelete(params.row.id)}
            >
              delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div
      style={{
        height: 600,
        width: "1100px",
        "@maxWidth: (767px)": { fontSize: "10px" },
        "@minWidth: (768px)": { fontSize: "16px" },
      }}
    >
      <div className="flex justify-between mb-2">
        <div className="text-[16px] text-gray md:text-[24px]">Add New User</div>
        <Link to="/users/new">
          <div className="text-[16px] text-emerald-900 bg-emerald-400 px-3 py-1 rounded-lg ">
            {" "}
            Add new
          </div>
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
