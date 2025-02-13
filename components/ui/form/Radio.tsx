import React, { FC } from "react"

interface RadioPropsI extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;
	options: { value: string | number; label: string }[];
	classNamesLabel?: string;
	classNamesInput?: string;
	error?: string;
	touched?: boolean;
}

const RadioInput: FC<RadioPropsI> = ({
	name,
	options,
	classNamesLabel,
	classNamesInput,
	error,
	touched,
	...props
}) => {
		return (
			<div className="pb-6 last:pb-0">
				<div className={`w-full flex flex-col gap-2`}>
					{options.map(({ value, label }) => (
						<label
							key={value}
							htmlFor={`${name}-${value}`}
							className={`flex items-center gap-2 text-gray-40 cursor-pointer mb-2 ${classNamesLabel}`}
						>
							<input
								type="radio"
								id={`${name}-${value}`}
								name={name}
								value={value}
								checked={props.value === value}
								onChange={props.onChange}
								onBlur={props.onBlur}
								className={`accent-blue-500 ${classNamesInput}`}
							/>
							<span>{label}</span>
						</label>
					))}
				</div>
				{touched && error && (<p className="text-red-500 text-sm ms-3">{error}</p>)}
			</div>
		);
	};

export default RadioInput;
