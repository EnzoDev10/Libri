interface Book {
    title: string;
    author: string;
    coverId: string;
    price: number;
    id?: number;
    categories: string[];
    description: string;
    quantity: number;
}

export type { Book };
