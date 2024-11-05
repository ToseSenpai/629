"use client";
import { wellfoodUtility } from "@/utility";
import { useEffect } from "react";
import niceSelect from "react-nice-select";

const WellFoodLayout = ({ children, bgBlack }) => {
  useEffect(() => {
    niceSelect();
    wellfoodUtility.animation();
    if (bgBlack) {
      document.querySelector(".page-wrapper").classList.add("bg-black");
    } else {
      document.querySelector(".page-wrapper").classList.remove("bg-black");
    }
  }, []);

  return (
    <div className="page-wrapper" style={{ paddingTop: '0px' }}>
      {children}
    </div>
  );
};

export default WellFoodLayout;
