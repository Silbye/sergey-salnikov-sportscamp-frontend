import { FC } from "react";
import { Comment } from "../../interfaces/comment";

import { useState } from "react";

import authorImage from "../../assets/img/author.png";

import "./CommentComponent.scss";
import { CommentForm } from "../CommentForm";

interface CommentInterface {
  comment: Comment;
  length: number;
  handleNewComment: (value: Comment) => void;
}

export const CommentComponent: FC<CommentInterface> = ({
  comment,
  length,
  handleNewComment,
}) => {
  const [responseVisible, setResponseVisible] = useState(false);
  const handleFocusLoss = (value: boolean): void => {
    setResponseVisible(value);
  };
  return (
    <div key={comment.id} className="comment">
      <div className="comment__author-wrapper">
        <img src={authorImage} alt="Author" className="comment__author-image" />
        <div className="comment__author-info">
          <p className="comment__author-name">{comment.author.nick}</p>
          <p className="comment__author-date">{comment.published.bunin}</p>
        </div>
        <button className="comment__author-dots">
          <svg
            width="18"
            height="4"
            viewBox="0 0 18 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2ZM11 2C11 3.10457 10.1046 4 9 4C7.89543 4 7 3.10457 7 2C7 0.895431 7.89543 0 9 0C10.1046 0 11 0.895431 11 2ZM16 4C17.1046 4 18 3.10457 18 2C18 0.895431 17.1046 0 16 0C14.8954 0 14 0.895431 14 2C14 3.10457 14.8954 4 16 4Z"
              fill="#222222"
            />
          </svg>
        </button>
      </div>
      {comment.parentComment ? (
        <div className="comment__response-wrapper">
          <p className="comment__response-author">
            Ответ <b>{comment.parentComment.author.nick}</b>
          </p>
          <p className="comment__response-text">{comment.parentComment.text}</p>
        </div>
      ) : null}
      <p className="comment__text">{comment.text}</p>
      <div className="comment__bottom-wrapper">
        <button
          className="comment__bottom-button"
          onClick={() => setResponseVisible(true)}
        >
          ОТВЕТИТЬ
        </button>
        <div className="comment__rating-wrapper">
          <button className="comment__rating-plus comment__rating-button">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 0H5V5H0V7H5V12H7V7H12V5H7V0Z"
                fill="#222222"
              />
            </svg>
          </button>
          <p
            className="comment__rating-text"
            style={{
              color:
                comment.rating.plus - comment.rating.minus >= 0
                  ? "#00A876"
                  : "#FF003C",
            }}
          >
            {comment.rating.plus - comment.rating.minus}
          </p>
          <button className="comment__rating-minus comment__rating-button">
            <svg
              width="12"
              height="2"
              viewBox="0 0 12 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H12V2H0V0Z" fill="#D8D8D8" />
            </svg>
          </button>
          <div className="comment__rating-extra">
            <p className="comment__rating-extra-plus">+{comment.rating.plus}</p>
            <span></span>
            <p className="comment__rating-extra-minus">
              -{comment.rating.minus}
            </p>
          </div>
        </div>
      </div>
      <CommentForm
        length={length}
        parentComment={comment}
        responseVisible={responseVisible}
        handleNewComment={handleNewComment}
        handleFocusLoss={handleFocusLoss}
      />
    </div>
  );
};
