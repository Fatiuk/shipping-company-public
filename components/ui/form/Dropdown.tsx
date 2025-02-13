import React, { FC } from 'react';

interface DropdownPropsI extends React.SelectHTMLAttributes<HTMLSelectElement> {
	name: string;
	options: { value: string | number; label: string }[];
	selectedValue?: string | number;
	placeholder?: string;
	classNamesLabel?: string;
	classNamesInput?: string;
	error?: string;
	touched?: boolean;
}

const Dropdown: FC<DropdownPropsI> = ({
	name,
	options,
	placeholder = "",
	classNamesLabel,
	classNamesInput,
	error,
	touched,
	...props

}) => {
		return (
			<div className="pb-6 last:pb-0">
				<label htmlFor={name} className={`relative w-full flex flex-col gap-2 mb-2 text-gray-40 ${classNamesLabel}`}>
					<select id={name} name={name} className={`w-full bg-white border-2 rounded-md p-2 outline-none cursor-pointer text-gray-700 ${touched && error ? 'border-red-500' : 'border-gray-300'} ${classNamesInput}`} {...props}>
						<option value="" disabled>
							{placeholder}
						</option>
						{options.map(({ value, label }) => (
							<option key={value} value={value}>
								{label}
							</option>
						))}
					</select>
				</label>
				{touched && error && (<p className="text-red-500 text-sm ms-3">{error}</p>)}
			</div>
		);
	};

export default Dropdown;
