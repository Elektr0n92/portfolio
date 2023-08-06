import "./BackgroundArrow.css";
function TextAppear({ title }) {
  return (
    <div className="block top-0 h-full absolute animate-slideRight w-full transform -translate-y-1/2 text-appear">
      <div className="flex justify-center ring-1 h-full">{title}</div>
    </div>
  );
}

export default TextAppear;
