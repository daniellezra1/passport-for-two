interface Content {
  title: string;
  text: string;
  images: string[];
}

export interface Post {
  id: string;
  title: string;
  content: Content[];
  date: Date | any;
  tags: string[];
  mainImg: string;
  showPost: boolean;
}
