export default interface QuotationI {
	id: number;
	name: string;
	en: {
		text: string;
		title: string;
	},
	fr: {
		text: string;
		title: string;
	};
}