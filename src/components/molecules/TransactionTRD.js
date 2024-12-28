import React from "react";

function TransactionTRD({ transaction }) {
  return (
    <tr>
      <td className="px-4 py-5 text-[14px] text-black font-light font-vazir">
        {transaction.createdAt}
      </td>
      <td className="px-4 py-5 text-[14px] text-black font-light font-vazir">
        {transaction.amount}
      </td>
      <td className="px-4 py-5 text-[14px] text-black font-light font-vazir">
        {transaction.type}
      </td>
      <td className="px-4 py-5 text-[14px] text-black font-light font-vazir">
        {transaction.id}
      </td>
    </tr>
  );
}

export default TransactionTRD;
