import { FC, useEffect, useRef, useState } from "react";

interface DateInputPropsI extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  name: string;
  classNamesLabel?: string;
  classNamesInput?: string;
  error?: string;
  touched?: boolean;
  placeholder?: string;
}

const DateInput: FC<DateInputPropsI> = ({
  icon,
  name,
  classNamesLabel = "",
  classNamesInput = "",
  error,
  touched,
  placeholder,
  value,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showPlaceholder, setShowPlaceholder] = useState(!value);
  const [hasFocus, setHasFocus] = useState(false);

  // Update placeholder visibility when the value changes
  useEffect(() => {
    setShowPlaceholder(!value);
  }, [value]);

  // Handle click anywhere on the date field to open the date picker
  const handleDateFieldClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker();
    }
  };

  return (
    <div className="pb-2 sm:pb-6 last:pb-0">
      <div
        className={`w-full border-2 rounded-lg text-gray-40 flex items-center gap-2 mb-2 cursor-pointer relative ${
          touched && error ? "border-red-500" : "border-gray-300"
        } ${classNamesLabel}`}
        onClick={handleDateFieldClick}
      >
        {/* Icon */}
        {icon && (
          <div className="date-icon-container flex items-center h-full">
            <span className="text-gray-400">{icon}</span>
          </div>
        )}

        {/* Custom placeholder */}
        {showPlaceholder && placeholder && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-12 pointer-events-none">
            <span className="text-gray-400">{placeholder}</span>
          </div>
        )}

        {/* Hidden label for accessibility */}
        <label htmlFor={name} className="sr-only">
          {placeholder || "Date"}
        </label>

        <input
          ref={inputRef}
          className={`flex-1 w-full outline-none rounded-[9px] py-4 cursor-pointer ${classNamesInput}`}
          name={name}
          id={name}
          type="date"
          value={value as string}
          style={{
            textAlign: "inherit",
            colorScheme: "light", // Force black calendar icon
            color: showPlaceholder ? "transparent" : "black",
            // Add calendar icon transparency when showing placeholder
            opacity: 1,
            // Push the calendar icon to the right edge
            paddingRight: "10px",
          }}
          onFocus={() => {
            setHasFocus(true);
            if (!inputRef.current?.value) {
              setShowPlaceholder(true);
            }
          }}
          onBlur={() => {
            setHasFocus(false);
            const isEmpty = !inputRef.current?.value;
            setShowPlaceholder(isEmpty);
            // Update text color when field is empty
            if (inputRef.current) {
              inputRef.current.style.color = isEmpty ? "transparent" : "black";
            }
          }}
          onChange={(e) => {
            // Call original onChange if it exists
            if (props.onChange) props.onChange(e);

            e.target.style.color = e.target.value ? "black" : "transparent";
            setShowPlaceholder(!e.target.value);
          }}
          {...props}
        />
      </div>
      {touched && error && <p className="text-red-500 text-sm ms-3">{error}</p>}
    </div>
  );
};

export default DateInput;
