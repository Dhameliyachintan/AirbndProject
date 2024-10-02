import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avater from "../Avater";
import Menuitems from "./Menuitems";
import { useCallback } from "react";

export default function UseMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-100"
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row gap-3 items-center rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avater />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
             <>
             <Menuitems
                  label="Login"
                  onClick={() => {}}
                />
             <Menuitems
                  label="Sign up"
                  onClick={() => {}}
                />
             </>
          </div>
        </div>
      )}
    </div>
  );
}
