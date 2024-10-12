import { useState } from "react";

export default function Button({
  type,
  onClick,
  initial,
  children,
  icon = false,
  pathData = "",
}) {
  
  return (
    <button
      className="m-2 flex items-center rounded-full border-2 border-black bg-white px-4 py-2 text-center font-mono text-black transition-transform duration-150 hover:scale-95 hover:bg-black hover:text-white"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      type={type}
    >
      <span>{initial}</span>
      {icon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="ml-2 h-4 w-4 fill-current"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={pathData} />
        </svg>
      )}
      {children}
    </button>
  );
}
