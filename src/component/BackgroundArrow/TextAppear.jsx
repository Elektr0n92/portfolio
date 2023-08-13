import "./BackgroundArrow.css";

function TextAppear({ title, description }) {
  const formattedDescription = description.map((desc, index) => (
    <div key={index}>
      <p>{desc.firstline}</p>
      <p>{desc.after.join(" ")}</p>
    </div>
  ));

  return (
    <div className="flex top-0 absolute animate-slideRight w-full transform -translate-y-1/2 text-appear opacity-0 flex-col border border-white h-full">
      <div className="text-center">{title}</div>
      <div className="animate-TextAppear opacity-0">{formattedDescription}</div>
    </div>
  );
}

export default TextAppear;
