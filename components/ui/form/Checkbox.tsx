import React, { FC } from "react";

interface CheckboxPropsI extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  classNamesLabel?: string;
  classNamesInput?: string;
  error?: string;
  touched?: boolean;
}

const Checkbox: FC<CheckboxPropsI> = ({
  name,
  label,
  classNamesLabel,
  classNamesInput,
  error,
  touched,
  ...props
}) => {
  return (
    <div className="pb-4 last:pb-0">
      <label
        htmlFor={name}
        className={`flex items-start gap-2 cursor-pointer ${classNamesLabel}`}
      >
        <div className="relative inline-block w-5 h-5">
          <input
            type="checkbox"
            id={name}
            name={name}
            checked={props.checked}
            onChange={props.onChange}
            onBlur={props.onBlur}
            className={`absolute w-5 h-5 cursor-pointer opacity-0 z-10 
              appearance-none border border-gray-300 rounded bg-white ${classNamesInput}`}
          />
          <div className="w-5 h-5 bg-white border border-gray-300 rounded"></div>
          {props.checked && (
            <svg
              className="absolute top-0 left-0 w-5 h-5 text-oblue-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>

        <span>{label}</span>
      </label>
      {touched && error && <p className="text-red-500 text-sm ms-7">{error}</p>}
    </div>
  );
};

export default Checkbox;
