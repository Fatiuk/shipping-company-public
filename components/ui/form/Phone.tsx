import React, { FC, useState, useEffect } from "react";

interface PhoneInputPropsI extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  name: string;
  classNamesLabel?: string;
  classNamesInput?: string;
  error?: string;
  touched?: boolean;
}

const PhoneInput: FC<PhoneInputPropsI> = ({
  icon,
  name,
  classNamesLabel = "",
  classNamesInput = "",
  error,
  touched,
  value,
  onChange,
  ...props
}) => {
  // Track the actual phone input without the +1 prefix
  const [phoneValue, setPhoneValue] = useState<string>((value as string) || "");

  // Handle phone input formatting with +1 prefix
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    // Remove any non-digit characters
    const digitsOnly = input.replace(/\D/g, "");

    // Limit to 10 digits (excluding the +1 prefix)
    const formattedValue = digitsOnly.substring(0, 10);

    setPhoneValue(formattedValue);

    // Create a synthetic event to maintain formik compatibility
    const syntheticEvent = {
      ...e,
      target: {
        ...e.target,
        name: e.target.name,
        value: formattedValue,
      },
    };

    if (onChange) {
      onChange(syntheticEvent);
    }
  };

  // Update internal state when value prop changes
  useEffect(() => {
    if (value !== undefined && value !== phoneValue) {
      setPhoneValue(value as string);
    }
  }, [value]);

  return (
    <div className="pb-2 sm:pb-6 last:pb-0">
      <label
        htmlFor={name}
        className={`w-full border-2 rounded-lg text-gray-40 flex items-center gap-2 mb-2 ${
          touched && error ? "border-red-500" : "border-gray-300"
        } ${classNamesLabel}`}
      >
        {icon && <span className="text-gray-40">{icon}</span>}
        <div className="flex-1 flex items-center">
          <span className="text-black pl-2 pr-1 font-normal">+1</span>
          <input
            style={{ textAlign: "inherit" }}
            className={`flex-1 w-full outline-none rounded-[9px] text-black py-4 ${classNamesInput}`}
            name={name}
            id={name}
            type="tel"
            value={phoneValue}
            onChange={handlePhoneChange}
            {...props}
          />
        </div>
      </label>
      {touched && error && <p className="text-red-500 text-sm ms-3">{error}</p>}
    </div>
  );
};

export default PhoneInput;
