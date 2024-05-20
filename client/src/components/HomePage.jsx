import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import MessageContainer from "./MessageContainer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { authUser } = useSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, []);

  const [isLeftVisible, setIsLeftVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth >= 700);

  const toggleVisibility = () => {
    setIsLeftVisible(!isLeftVisible);
  };

  const adjustDisplayBasedOnWidth = () => {
    const isMobile = window.innerWidth >= 700;
    setIsMobile(isMobile);
    setIsLeftVisible(!isMobile);
  };

  useEffect(() => {
    window.addEventListener("resize", adjustDisplayBasedOnWidth);
    adjustDisplayBasedOnWidth();

    return () => {
      window.removeEventListener("resize", adjustDisplayBasedOnWidth);
    };
  }, []);

  return (
    <div className="flex h-[90%] w-[95%] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-solid border-2 border-indigo-600">
      {/* <div className={` ${!isLeftVisible && !isMobile ? "hidden" : ""}`}>
        <Sidebar toggleVisibility={toggleVisibility} />
      </div>
      <div className={` ${isLeftVisible && !isMobile ? "hidden" : ""}`}>
        <MessageContainer toggleVisibility={toggleVisibility} />
      </div> */}

      {console.log(isMobile)}

      <Sidebar
        toggleVisibility={toggleVisibility}
        isLeftVisible={isLeftVisible}
        isMobile={isMobile}
      />
      <MessageContainer
        toggleVisibility={toggleVisibility}
        isLeftVisible={isLeftVisible}
        isMobile={isMobile}
      />
    </div>
  );
};

export default HomePage;
