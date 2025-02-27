import React, { FC } from "react";

interface InputPropsI extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  name: string;
  classNamesLabel?: string;
  classNamesInput?: string;
  error?: string;
  touched?: boolean;
}

const Input: FC<InputPropsI> = ({
  icon,
  name,
  classNamesLabel = "",
  classNamesInput = "",
  error,
  touched,
  ...props
}) => {
  return (
    <div className="pb-2 sm:pb-6 last:pb-0">
      <label
        htmlFor={name}
        className={`w-full border-2 rounded-lg text-gray-40 flex items-center gap-2 mb-2 ${
          touched && error ? "border-red-500" : "border-gray-300"
        } ${classNamesLabel}`}
      >
        {icon && <span className="text-gray-40">{icon}</span>}
        <input
          style={{ textAlign: "inherit" }}
          className={`flex-1 w-full outline-none rounded-[9px] text-black py-4 ${classNamesInput}`}
          name={name}
          id={name}
          {...props}
        />
      </label>
      {touched && error && <p className="text-red-500 text-sm ms-3">{error}</p>}
    </div>
  );
};

export default Input;
