import React from "react";

function StatComponent({ number, text }) {
return (
    <div>
      <div className="text-white text-4xl font-bold pb-4">
        <p className="">{number}<span className="text-[#2387C0]">+</span></p>
        
      </div>

      <p className="second text-lg">{text}</p>
    </div>
  );
}

export default StatComponent;
