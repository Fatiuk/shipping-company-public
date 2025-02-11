export enum ColorKey {
	Black = "black",
	Blue = "blue",
	Cyan = "cyan",
	Green = "green",
	Orange = "orange",
	Red = "red",
	Violet = "violet",
	White = "white",
	Yellow = "yellow",
}

export const getColorTranslation: Record<ColorKey, { en: string; fr: string }> = {
	[ColorKey.Black]:	{ en: "Black", fr: "Noir"},
	[ColorKey.Blue]:	{ en: "Blue", fr: "Bleu"},
	[ColorKey.Cyan]:	{ en: "Cyan", fr: "Cyan"},
	[ColorKey.Green]:	{ en: "Green", fr: "Vert"},
	[ColorKey.Orange]:	{ en: "Orange", fr: "Orange"},
	[ColorKey.Red]:		{ en: "Red", fr: "Rouge"},
	[ColorKey.Violet]:	{ en: "Violet", fr: "Violet"},
	[ColorKey.White]:	{ en: "White", fr: "Blanc"},
	[ColorKey.Yellow]:	{ en: "Yellow", fr: "Jaune"},
}

export default interface ColorI {
	colorClass: string;
	en: string;
	fr: string;
}