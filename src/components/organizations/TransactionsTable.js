import React from "react";
import TransactionTRD from "../molecules/TransactionTRD";

function TransactionsTable() {
  return (
    <div className="w-full h-fit border rounded-xl overflow-hidden mb-[233px]">
      <table className="w-full table-fixed text-right ">
        <thead>
          <tr className=" bg-[#F3F3F3] ">
            <th className="px-4 py-[15px] text-[16px] text-black font-normal">
              تاریخ و ساعت
            </th>
            <th className="px-4 py-[15px] text-[16px] text-black font-normal">
              مبلغ (تومان)
            </th>
            <th className="px-4 py-[15px] text-[16px] text-black font-normal">
              نوع تراکنش
            </th>
            <th className="px-4 py-[15px] text-[16px] text-black font-normal">
              شماره سفارش
            </th>
          </tr>
        </thead>
        <tbody>
          <TransactionTRD />
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsTable;
