import React from "react";

function Box({title,description}) {
  console.log(title,description)
  return (
    <div className="p-6">
      <div className="font-[700] text-[20px]">{title}</div>
      <div className="font-[400] text-[14px]">
        {description}
      </div>
    </div>
  );
}

export default Box;
