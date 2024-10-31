import "./CommentControls.scss";

import sort from "../../assets/icons/sort.svg";
import dialogue from "../../assets/icons/dialogue.svg";

type Props = {
  length: number;
};

export const CommentControls = ({ length }: Props) => {
  return (
    <div className="comment__controls">
      <h1 className="comment__controls-amount">
        {length}{" "}
        {length % 10 === 1 && length % 100 !== 11
          ? "комментарий"
          : (length % 10 === 2 && length % 100 !== 12) ||
            (length % 10 === 3 && length % 100 !== 13) ||
            (length % 10 === 4 && length % 100 !== 14)
          ? "комментария"
          : "комментариев"}
      </h1>
      <div className="comment__controls-wrapper">
        <div className="comment__controls-sorting">
          <button className="comment__controls-date-sorting">
            ПО ДАТЕ <img src={sort} alt="" />
          </button>
          <button className="comment__controls-best-sorting">ЛУЧШИЕ</button>
          <button className="comment__controls-actual-sorting">
            АКТУАЛЬНЫЕ
          </button>
        </div>
        <button className="comment__controls-response-sorting">
          С диалогами
          <img src={dialogue} alt="" />
        </button>
      </div>
    </div>
  );
};
