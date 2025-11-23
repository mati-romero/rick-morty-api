import { useState } from "react";

export default function Accordion({ title, children, action }) {
  const [open, setOpen] = useState(false);

  const handle = () => {
    const willOpen = !open;
    setOpen(willOpen);

    if(action && willOpen) action();
  }

  return (
    <div
      className="
        w-full rounded-2xl bg-[#0f2d0f] 
        text-[#aaffaa] p-4 my-3 cursor-pointer
        transition-colors duration-200
      "
    >
      {/* Header */}
      <div
        className="flex justify-between items-center"
        onClick={() => handle()}
      >
        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        <span className="text-[#77bb77] text-xl ml-4">
          {open ? "-" : "+"}
        </span>
      </div>

      {/* Content */}
      <div
        className={`
          overflow-hidden transition-all duration-300
          ${open ? "max-h-100 mt-3" : "max-h-0"}
        `}
      >
        <div className="text-[#aaffaa] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
