"use client"
import React, { FC, useEffect, useState } from "react"

const StatsItem: FC<{ targetNumber: number, increment: number, suffix: string, text: string }> = ({ targetNumber, increment, suffix, text }) => {
	const [currentNumber, setCurrentNumber] = useState(0);
	const duration = targetNumber / (increment * 10);

	useEffect(() => {
		if (currentNumber >= targetNumber) return;

		const interval = setInterval(() => {
			setCurrentNumber(prevNumber => {
				const nextNumber = prevNumber + increment;
				return nextNumber >= targetNumber ? targetNumber : nextNumber;
			});
		}, duration);

		return () => clearInterval(interval);
	}, [currentNumber]);

	return (
		<div className="text-center sm:w-full md:w-[47%] lg:w-[30%]">
			<p className="font-header text-5xl text-oblue-600 dark:text-oaccent-900 pb-3">{currentNumber}{suffix}</p>
			<p className="font-sans text-lg">{text}</p>
		</div>
	);
}

export default StatsItem