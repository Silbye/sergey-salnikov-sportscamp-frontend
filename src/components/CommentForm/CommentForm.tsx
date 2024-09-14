import { useEffect, useState } from "react";

import { Comment } from "../../interfaces/comment";
import { getDate } from "../../hooks/useGetDate";

import "./CommentForm.scss";

type Props = {
  parentComment?: Comment;
  length: number;
  responseVisible?: boolean;
  handleNewComment: (value: Comment) => void;
  handleFocusLoss?: (value: boolean) => void;
};

export const CommentForm = ({
  parentComment,
  length,
  responseVisible,
  handleNewComment,
  handleFocusLoss,
}: Props) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;
    setInputValue(val);
  };

  function onBlur() {
    return false;
  }

  function createNewComment(inputValue: string) {
    setInputValue("");

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

  return (
    <div
      className="comment-form"
      style={{
        display:
          typeof responseVisible == "undefined" ||
          responseVisible === true ||
          inputValue
            ? "flex"
            : "none",
      }}
    >
      <textarea
        className={
          inputValue
            ? "comment-form__input-focused comment-form__input"
            : "comment-form__input"
        }
        placeholder="Написать комментарий..."
        value={inputValue}
        onChange={handleChange}
        onBlur={() => handleFocusLoss?.(onBlur())}
      ></textarea>
      <div
        className="comment-form__moderation-bar"
        style={{
          display: inputValue ? "flex" : "",
        }}
      >
        <div className="comment-form__moderation-wrapper">
          <p className="comment-form__moderation-text">
            Пишите корректно и дружелюбно.
          </p>
          <a href="#" className="comment-form__moderation-link">
            Принципы нашей модерации
          </a>
        </div>
        <button
          className="comment-form__moderation-button"
          disabled={!inputValue}
          onClick={() => {
            handleNewComment(createNewComment(inputValue));
            handleFocusLoss?.(onBlur());
          }}
        >
          ОТПРАВИТЬ
        </button>
      </div>
    </div>
  );
};
