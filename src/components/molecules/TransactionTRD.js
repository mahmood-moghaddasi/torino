import React from "react";

function TransactionTRD({ transaction }) {
  return (
    <tr>
      <td className="px-4 py-5 text-[14px] text-black font-light">
        {transaction.createdAt}
      </td>
      <td className="px-4 py-5 text-[14px] text-black font-light">
        {transaction.amount}
      </td>
      <td className="px-4 py-5 text-[14px] text-black font-light">
        {transaction.type}
      </td>
      <td className="px-4 py-5 text-[14px] text-black font-light">
        {transaction.id}
      </td>
    </tr>
  );
}

export default TransactionTRD;
