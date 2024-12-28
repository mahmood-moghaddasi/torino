"use client";
import React from "react";
import TransactionTRD from "../molecules/TransactionTRD";
import { useGetUserTransaction } from "@/services/queries";
import { Oval } from "react-loader-spinner";

function TransactionsTable() {
  const { data, isPending } = useGetUserTransaction();
  console.log(data);
  return (
    <div className="w-full h-fit border rounded-xl overflow-hidden mb-[233px]">
      <table className="w-full table-fixed text-right ">
        <thead>
          <tr className=" bg-[#F3F3F3] ">
            <th className="px-4 py-[15px] text-[16px] text-black font-normal font-yekan">
              تاریخ و ساعت
            </th>
            <th className="px-4 py-[15px] text-[16px] text-black font-normal font-yekan">
              مبلغ (تومان)
            </th>
            <th className="px-4 py-[15px] text-[16px] text-black font-normal font-yekan">
              نوع تراکنش
            </th>
            <th className="px-4 py-[15px] text-[16px] text-black font-normal font-yekan">
              شماره سفارش
            </th>
          </tr>
        </thead>
        <tbody>
          {isPending ? (
            <Oval
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          ) : data.data.length === 0 ? (
            <tr>
              <td className="px-4 py-[15px] ">تراکنشی وجود ندارد</td>
            </tr>
          ) : (
            data.data.map((transaction) => (
              <TransactionTRD key={transaction.id} transaction={transaction} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsTable;
