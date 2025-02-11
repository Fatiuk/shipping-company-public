import { ReactNode } from "react";

export default interface NewsItemI {
	id: number;
	date: string;
	slug: string;
	en: {
		tags: string[];
		title: string;
		text: ReactNode;
	};
	fr: {
		tags: string[];
		title: string;
		text: ReactNode;
	};
}