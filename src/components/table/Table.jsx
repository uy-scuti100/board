import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "images/black model.jpg",
      customer: "John Smith",
      date: "1 March",

      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "images/black model.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "images/black model.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "images/black model.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "images/black model.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          sxStyle={{
            "@maxWidth: (767px)": { fontSize: "10px" },
            "@minWidth: (768px)": { fontSize: "16px" },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Tracking ID</TableCell>
              <div className="hidden md:block">
                <TableCell>Product</TableCell>
              </div>
              <TableCell className="">Customer</TableCell>
              <TableCell className="">Date</TableCell>
              <TableCell>Amount</TableCell>
              <div className="hidden md:block">
                <TableCell>Payment Method</TableCell>
              </div>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <div className="hidden md:block">
                  <TableCell>
                    <div className="flex items-center ">
                      <img
                        src={row.img}
                        alt="/"
                        className="rounded-full w-[32px] h-[32px] mr-[10px] object-cover "
                      />
                      {row.product}
                    </div>
                  </TableCell>
                </div>
                <TableCell>{row.customer}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <div className="hidden md:block">
                  <TableCell>{row.method}</TableCell>
                </div>
                <TableCell>
                  <span
                    className={
                      row.status === "Approved"
                        ? "text-green-700 bg-green-100  p-[5px] rounded-md"
                        : "text-red-700 bg-red-100  p-[5px] rounded-md"
                    }
                  >
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;
