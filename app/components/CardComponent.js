import Image from "next/image";
import React from "react";

function CardComponent({child, title, text}) {
  return (
    <div className="flex flex-col gap-9">
      {child}
      <h3 className="text-3xl">{title}</h3>
      <p className="second text-lg leading-10 max-w-83">{text}</p>
    </div>
  );
}

export default CardComponent;
