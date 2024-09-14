export interface Comment {
  author: { nick: string };
  id: string;
  parentComment?:
    | { id: string; author: { nick: string }; text: string }
    | undefined;
  published: { bunin: string };
  rating: { minus: number; plus: number };
  text: string;
}
