import "./BackgroundArrow.css";

function TextAppear({ title, description }) {
  return (
    <div className="flex top-0 absolute animate-slideRight w-full transform -translate-y-1/2 text-appear opacity-0 flex-col border border-white h-full">
      <div className="text-center">{title}</div>
      <div className="animate-TextAppear opacity-0">
        {description.map((desc, index) => (
          <div key={index} className="flex gap-2 flex-col">
            <div className="firstline">{desc.firstline}</div>
            <div className="after">{desc.after.join(" ")}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TextAppear;
