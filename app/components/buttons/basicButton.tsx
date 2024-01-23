import React from "react";

interface BasicButtonParams {
  title: string;
  typeBtn: "button" | "submit" | "reset" | undefined;
}

export default function BasicButton({ title, typeBtn }: BasicButtonParams) {
  return (
    <button
      type={typeBtn || "button"}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full"
    >
      {title}
    </button>
  );
}
