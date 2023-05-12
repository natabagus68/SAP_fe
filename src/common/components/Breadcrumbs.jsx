import React from "react";
import { useNavigate } from "react-router-dom";
import { CaretIcon, HomeIcon } from "./icons/index.js";

export const Breadcrumbs = ({ items = [] }) => {
  const navigate = useNavigate();
  const generateLink = (i, arr) => {
    if (i != arr.length - 1) {
      let linkStr = "";
      for (let j = arr.length - i - 1; j >= 1; j--) {
        linkStr += "../";
      }
      return linkStr;
    }
  };
  return (
    <div className="flex gap-3 text-gray-500 font-body items-center">
      <HomeIcon />
      {items.map((item, i, arr) => {
        return (
          <div key={i} className="flex gap-3 items-center">
            <CaretIcon className="text-neutral-75" />
            <div
              onClick={() =>
                items[i] &&
                i < arr.length - 1 &&
                i != 0 &&
                navigate(generateLink(i, arr))
              }
              className={`font-semibold ${
                i == arr.length - 1 ? "text-[#20519F]" : "text-gray-700"
              } ${
                items[i] && i < arr.length - 1 && i != 0 && "cursor-pointer"
              }`}
            >
              {item}
            </div>
          </div>
        );
      })}
    </div>
  );
};
