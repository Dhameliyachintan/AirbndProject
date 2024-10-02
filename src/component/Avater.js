import React from "react";
import placeholder from "../assest/image/placeholder.jpg"

export default function Avater() {
  return (
    <div>
      <img className="rounded-full" height="30" width="30" alt="Avatar" src={placeholder}/>
    </div>
  );
}
