import React from "react";

interface TextField {
  label: string;
  type: string;
  htmlFor: string;
  value: string;
  onChange: (...args: any) => any;
}

export default function TextField({
  label,
  type,
  htmlFor,
  onChange,
  value
}: TextField) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type={type}
        id={htmlFor}
        name={htmlFor}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}
