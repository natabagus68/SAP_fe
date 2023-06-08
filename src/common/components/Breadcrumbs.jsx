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
            <CaretIcon className="text-[#B8B6B6]" />
            <div
              onClick={() =>
                items[i] &&
                i < arr.length - 1 &&
                i != 0 &&
                navigate(generateLink(i, arr))
              }
              className={`font-[400] ${
                i == arr.length - 1 ? "text-[#6F6C6C]" : "text-[#B8B6B6]"
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
