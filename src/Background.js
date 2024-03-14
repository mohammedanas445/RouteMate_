import React from "react";
import "./Background.css";
import bk from "./images/Group 14.png";

export const Background = () => {
  return (
    <div
      initial={{ opacity: 0,  }}
      animate={{ opacity: 1, }}
      transition={{ ease:"easeOut", duration: 0.5 }}
      className="bcg-images"
    >
      <div><img src={bk} alt="erri pukks"></img></div>
    </div>
  );
};
