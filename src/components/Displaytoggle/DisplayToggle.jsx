'use client'
import Image from "next/image";
import React, { useContext } from "react";
import './DisplayToggle.scss'
import { ThemeContext } from "@/context/ThemeContext";

const DisplayToggle = () => {
    const {mode, toggleMode} = useContext(ThemeContext)

  return (
    <div className="display toggle" onClick={toggleMode}>
      <Image width={15} height={15} src="/sun.png" alt="moon" />
      <Image width={15} height={15} src="/moon.png" alt="moon" />
        <div className={`displayMode ${mode}`}></div>
    </div>
  );
};

export default DisplayToggle;
