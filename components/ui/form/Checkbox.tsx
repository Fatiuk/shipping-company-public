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
        className={`flex items-center gap-2 cursor-pointer ${classNamesLabel}`}
      >
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={props.checked}
          onChange={props.onChange}
          onBlur={props.onBlur}
          className={`w-5 h-5 accent-blue-500 cursor-pointer ${classNamesInput}`}
        />
        <span className="text-black">{label}</span>
      </label>
      {touched && error && <p className="text-red-500 text-sm ms-7">{error}</p>}
    </div>
  );
};

export default Checkbox;
