import React from "react";
import Logo from "./navbar/Logo";
import Search from "./navbar/Search";
import UseMenu from "./navbar/UseMenu";

export default function Container(props) { // Corrected prop name
  return (
    <h1 className="text-black max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 flex justify-between items-center">
      <Logo logo={props.container} />   
      <Search/>
      <UseMenu/>
    </h1>
  );
}
