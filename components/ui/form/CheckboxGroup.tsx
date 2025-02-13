import React, { FC } from "react";

const CheckboxGroup: FC<{
	name: string;
	options: { value: string | number; label: string }[];
	selectedValues: (string | number)[];
	classNames?: string;
	onChange: (selected: (string | number)[]) => void;
}> = ({
	name,
	options,
	selectedValues,
	classNames,
	onChange,
}) => {
		const handleCheckboxChange = (value: string | number, isChecked: boolean) => {
			const updatedValues = isChecked
				? [...selectedValues, value]
				: selectedValues.filter((item) => item !== value);
			onChange(updatedValues);
		};

		return (
			<div className={`flex flex-col gap-2 ${classNames}`}>
				{options.map(({ value, label }) => (
					<label
						key={value}
						htmlFor={`${name}-${value}`}
						className="flex items-center gap-2 cursor-pointer"
					>
						<input
							type="checkbox"
							id={`${name}-${value}`}
							name={name}
							value={value}
							checked={selectedValues.includes(value)}
							onChange={(e) => handleCheckboxChange(value, e.target.checked)}
							className="w-5 h-5 accent-blue-500 cursor-pointer"
						/>
						<span className="text-gray-700">{label}</span>
					</label>
				))}
			</div>
		);
	};

export default CheckboxGroup;