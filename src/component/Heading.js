import React from "react";

export default function Heading(props) {
  return (
    <div>
      <div className={props.center ? "text-center" : "text-start"}>
        <div className="text-xl font-bold">{props.title}</div>
        <div className="mt-2 font-light text-neutral-500">{props.subtitle}</div>
      </div>
    </div>
  );
}
