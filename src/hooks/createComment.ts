import { getDate } from "./useGetDate";

import { Comment } from "../interfaces/comment";

export function createNewComment(
  inputValue: string,
  length: number,
  parentComment?: Comment
) {
  let obj = {
    author: { nick: "Имя Пользователя" },
    id: length.toString(),
    published: { bunin: getDate() },
    rating: { plus: 0, minus: 0 },
    text: inputValue,
  } as Comment;

  if (parentComment) {
    obj.parentComment = {
      id: parentComment.id,
      author: { nick: parentComment.author.nick },
      text: parentComment.text,
    };
  }
  return obj;
}
