interface Content {
    title: string;
    text: string;
    images: string[];
}

export interface Post {
    id: string;
    title: string;
    content: Content[];
    date: Date;
    tags: string[];
    mainImg: string;
}