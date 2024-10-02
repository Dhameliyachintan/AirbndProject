import React from "react";
import Container from "../Container";
import airbandimage from "../../assest/image/airbandlogo.png"

export default function Navbar() {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="p-4 border-b-[1px]"> {/* Fixed typo from 'borber-b-[1px]' to 'border-b-[1px]' */}
        <Container container={airbandimage} />
        <div className="flex justify-between items-center flex-row gap-3 md:gap-0">
        </div>
      </div>
    </div>
  );
}
