import React from "react";

function Contentcard({ task3 }) {
  return (
    <div className="w-[65%] sm:w-[32rem] p-4 cursor-pointer transition-all duration-200 ease-in transform sm:hover:scale-105">
      <div className="bg-white rounded-lg overflow-hidden shadow-md h-[35rem]">
        <div className="bg-black text-white text-center py-2">
          <h2 className="text-lg font-[600] text-[16px] font-sans">
            {task3.asset_title}
          </h2>
        </div>
        <div className="p-4">
          <p className="text-gray-800 text-[14px]">
            Description :{task3.asset_description}
          </p>
        </div>
        <hr />

        <div className="m-8">
          <label htmlFor="title" className="text-gray-700 font-bold mb-2">
            Title
          </label>

          <input
            id="title"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
            placeholder="Enter title"
          />
          <p className="text-gray-700 font-bold mb-2">Content</p>
          <div className="border-solid border-2 rounded-t-xl flex flex-wrap items-center mb-4">
            <button className="text-gray-700 px-2 py-1 rounded-full mr-2">
              File
            </button>
            <button className="text-gray-700 px-2 py-1 rounded-full mr-2">
              Edit
            </button>
            <button className="text-gray-700 px-2 py-1 rounded-full mr-2">
              View
            </button>
            <button className="text-gray-700 px-2 py-1 rounded-full mr-2">
              Insert
            </button>
            <button className="text-gray-700 px-2 py-1 rounded-full mr-2">
              Format
            </button>
            <button className="text-gray-700 px-2 py-1 rounded-full mr-2">
              Tools
            </button>
            <button className="text-gray-700 px-2 py-1 rounded-full mr-2">
              Table
            </button>
            <button className="text-gray-700 px-2 py-1 rounded-full mr-2">
              Help
            </button>
            <div className="flex items-center justify-center">
              <button className="text-gray-700 px-2 py-1 rounded-full mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
              <button className="text-gray-700 px-2 py-1 rounded-full mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
              <button className="text-gray-700 px-2 py-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="border-solid border-2 h-[15rem] mt-[-18px] w-full">
            Content goes here
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contentcard;
