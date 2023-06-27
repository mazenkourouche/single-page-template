import React from "react";

const InputField = ({ htmlFor, srLabel, type, name, id, placeholder }) => {
  return (
    <div>
      <label htmlFor={htmlFor} className="sr-only">
        {srLabel}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-transparent placeholder:text-brand-navy/70 focus:ring-2 focus:ring-inset focus:ring-brand-orange transition-all sm:text-sm sm:leading-6"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
