 export function randomInt(min: number = 8000, max: number = 90000) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export const formatPrice = (price: number): string => {
    return `$${price.toLocaleString("es-AR")}`;
};
