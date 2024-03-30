import React from "react";

export default function ChargesSummary() {
  return (
    <div className="space-y-4 w-full">
      <h2 className="text-lg font-semibold border-b border-indigo-500">
        Charges Summary
      </h2>
      <table className="min-w-full divide-y rounded-md divide-indigo-500">
        <thead>
          <tr className="bg-indigo-200">
            <th
              scope="col"
              className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700 truncate"
            >
              Charge
            </th>
            <th
              scope="col"
              className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700 truncate"
            >
              Unit
            </th>
            <th
              scope="col"
              className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700"
            >
              Rate
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-700 sm:pr-6 truncate"
            >
              Total
            </th>
          </tr>
        </thead>
        <tbody className="bg-indigo-200 divide-y divide-indigo-500">
          <tr>
            <td className="p-4 text-sm font-normal text-left text-gray-700 whitespace-nowrap">
              Daily
            </td>
            <td className="p-4 text-sm font-normal text-left text-gray-700 whitespace-nowrap">
              1
            </td>
            <td className="p-4 text-sm font-normal text-left text-gray-700 whitespace-nowrap">
              $99.00
            </td>
            <td className="p-4 text-sm font-normal text-left text-gray-700 whitespace-nowrap">
              $99.00
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
