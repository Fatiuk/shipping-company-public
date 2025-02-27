import { FC, useRef } from "react";

interface DateInputPropsI extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  name: string;
  classNamesLabel?: string;
  classNamesInput?: string;
  error?: string;
  touched?: boolean;
}

const DateInput: FC<DateInputPropsI> = ({
  icon,
  name,
  classNamesLabel = "",
  classNamesInput = "",
  error,
  touched,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle click anywhere on the date field to open the date picker
  const handleDateFieldClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker();
    }
  };

  return (
    <div className="pb-2 sm:pb-6 last:pb-0">
      <label
        htmlFor={name}
        className={`w-full border-2 rounded-lg text-gray-40 flex items-center gap-2 mb-2 cursor-pointer ${
          touched && error ? "border-red-500" : "border-gray-300"
        } ${classNamesLabel}`}
        onClick={handleDateFieldClick}
      >
        {icon && <span className="text-gray-40">{icon}</span>}
        <input
          ref={inputRef}
          className={`flex-1 w-full outline-none rounded-[9px] text-black py-4 cursor-pointer ${classNamesInput}`}
          name={name}
          id={name}
          type="date"
          // Handle date icon color with inline style
          style={{
            textAlign: "inherit",
            colorScheme: "light", // Force black calendar icon
          }}
          {...props}
        />
      </label>
      {touched && error && <p className="text-red-500 text-sm ms-3">{error}</p>}
    </div>
  );
};

export default DateInput;
