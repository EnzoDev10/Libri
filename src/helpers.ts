 export function randomInt(min: number = 8000, max: number = 90000) {
	return Math.floor(Math.random() * (max - min)) + min;
}
