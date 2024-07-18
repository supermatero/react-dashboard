//import React from 'react'
import "./AreaTable.css";
import AreaTableAction from "./AreaTableAction";

const TABLE_HEADS = [
  "Products",
  "Order ID",
  "Date",
  "Customer name",
  "Status",
  "Amount",
  "Action",
];

const TABLE_DATA = [
  {
    id: 100,
    name: "Iphone 13 Pro",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "delivered",
    amount: 400,
  },
  {
    id: 101,
    name: "Macbook Pro",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "pending",
    amount: 288,
  },
  {
    id: 102,
    name: "Apple Watch",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "canceled",
    amount: 500,
  },
  {
    id: 103,
    name: "Microsoft Book",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "delivered",
    amount: 100,
  },
  {
    id: 104,
    name: "Apple Pen",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "delivered",
    amount: 60,
  },
  {
    id: 105,
    name: "Airpods",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "delivered",
    amount: 80,
  },
];
export default function AreaTable() {
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Latest Orders</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS.map((head) => (
                <th key={head}>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA ?.map((data) => (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.order_id}</td>
                <td>{data.date}</td>
                <td>{data.customer}</td>
                <td>
                  <div className="dt-status">
                    <span className={`dt-status-dot dot-${data.status.toLowerCase()}`}></span>
                    <span className="dt-status-text">{data.status}</span>
                  </div>
                </td>
                <td>${data.amount.toFixed(2)}</td>
                <td className="dt-cell-action">
                  <AreaTableAction/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
