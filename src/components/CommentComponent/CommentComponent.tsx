import { FC } from "react";
import { Comment } from "../../interfaces/comment";

import { useState } from "react";

import authorImage from "../../assets/img/author.png";

import "./CommentComponent.scss";
import { CommentForm } from "../CommentForm";

import dots from "../../assets/icons/dots.svg";
import plus from "../../assets/icons/plus.svg";
import minus from "../../assets/icons/minus.svg";

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
          <img src={dots} alt="" />
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
            <img src={plus} alt="" />
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
            <img src={minus} alt="" />
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
