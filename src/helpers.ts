export function randomInt(min: number = 1, max: number = 100000) {
	return Math.floor(Math.random() * (max - min)) + min;
}
