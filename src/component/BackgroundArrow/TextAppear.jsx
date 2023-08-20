import React from "react";

function TextAppear({ title, description }) {
  return (
    <div className={"text-appear-container lg:block hidden"}>
      <div className="text-center">{title}</div>
      <div className="text-container">
        {description.map((desc, index) => (
          <div key={index} className="description-item">
            <div className="firstline">{desc.firstline}</div>
            <div className="after">{desc.after.join(" ")}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TextAppear;
