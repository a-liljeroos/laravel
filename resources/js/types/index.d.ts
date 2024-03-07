export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};

export interface Product {
    id: number;
    name: string;
    description_short: string;
    description_long: string;
    price: number;
    quantity: number;
    brand_id: number;
    category_ids: number[];
    image_urls: string[];
    tags: string[];
    ean: string;
    warranty: number;
    active: boolean;
}

export interface Category {
    id?: number;
    name: string;
    description: string;
}
