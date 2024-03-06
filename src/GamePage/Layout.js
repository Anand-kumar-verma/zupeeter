import React from "react";
import Navigation from "./Naviagation";
import { useMediaQuery } from 'react-responsive';
import MobileNavigation from "./MobileNavigation";

const LayoutAviator = ({ component }) => {
  const isMediumScreen = useMediaQuery({ minWidth: 800 })

  return (
    <div className="h-screen w-screen">
      <div className="h-[5vh]">{isMediumScreen ?<Navigation />:<MobileNavigation/>}</div>
      <div className="h-[95vh] overflow-auto bg-[#1A1E25] lg:px-4 px-0">{component}</div>
    </div>
  );
};

export default LayoutAviator;
