export type DaysOfWeekEn = "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";

export type DaysOfWeekFr = "Dimanche" | "Lundi" | "Mardi" | "Mercredi" | "Jeudi" | "Vendredi" | "Samedi";

export interface DaysOfWeekI {
	Monday: {
		en: "Monday";
		fr: "Lundi" | "lundi";
	};
	Tuesday: {
		en: "Tuesday";
		fr: "Mardi" | "mardi";
	};
	Wednesday: {
		en: "Wednesday";
		fr: "Mercredi" | "mercredi";
	};
	Thursday: {
		en: "Thursday";
		fr: "Jeudi" | "jeudi";
	};
	Friday: {
		en: "Friday";
		fr: "Vendredi" | "vendredi";
	};
	Saturday: {
		en: "Saturday";
		fr: "Samedi" | "samedi";
	};
	Sunday: {
		en: "Sunday";
		fr: "Dimanche" | "dimanche";
	};
}

