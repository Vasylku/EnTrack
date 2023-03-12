import React from 'react';
import { FaSuitcase } from 'react-icons/fa';

const BaggagePolicy = () => {
  return (
    <div className="bg-gradient-to-b from-[#f8f7f4] to-[#04022c] min-h-screen">
      <div className="container mx-auto py-10">
        <div className="flex flex-col max-w-8xl mx-auto w-full">
          <h1 className="text-3xl font-semibold mb-4 text-center ">
            <FaSuitcase className="inline-block mr-2 mb-1" />
            Baggage Policy &amp; Service
          </h1>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Baggage Allowance</h2>
            <p className="text-gray-700 mb-4">
              Our baggage allowance policy is designed to ensure the safety and comfort of all our passengers. Please check
              the table below for the allowed weight and dimensions of your baggage:
            </p>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border">
                <thead>
                  <tr className="px-4 py-2 border w-1/2 text-left">
                    <th >Cabin Baggage</th>
                    <th >Checked Baggage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className= "px-4 py-2 border w-1/2">
                    <td>1 bag (up to 7 kg) + 1 personal item (e.g. laptop
                      bag)
                      </td>
                    <td>2 bags (up to 23 kg each)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mt-4">
              Please note that the above limits may vary depending on your ticket class and destination. Additional
              charges may apply for excess baggage or oversized items.
            </p>
            <h2 className="text-lg font-semibold mt-6 mb-4">Prohibited Items</h2>
            <p className="text-gray-700 mb-4">
              For safety reasons, the following items are strictly prohibited from being carried in both cabin and checked
              baggage:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Explosives, including fireworks and flares</li>
              <li >Compressed gases, including aerosols and scuba tanks</li>
              <li>Flammable liquids and solids, including lighters and matches</li>
              <li>Toxic and infectious substances</li>
              <li>Radioactive materials</li>
              <li>Other dangerous items, such as firearms and knives</li>
            </ul>
            <p className="text-gray-700 mt-4">
              If you have any questions regarding our baggage policy, please feel free to contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaggagePolicy;
