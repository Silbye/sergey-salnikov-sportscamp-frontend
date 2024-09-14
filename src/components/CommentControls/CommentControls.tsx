import "./CommentControls.scss";

type Props = {
  length: number;
};

export const CommentControls = ({ length }: Props) => {
  return (
    <div className="comment__controls">
      <h1 className="comment__controls-amount">{length} комментариев</h1>
      <div className="comment__controls-wrapper">
        <div className="comment__controls-sorting">
          <button className="comment__controls-date-sorting">
            ПО ДАТЕ{" "}
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.3323 2.91892L12.6628 0.27959C12.2858 -0.0931967 11.6976 -0.0931967 11.3206 0.27959L8.66626 2.91892C8.45265 3.13012 8 3.6179 8 3.6179L9.38915 4.87217C9.38915 4.87217 9.88478 4.36837 10.0085 4.24604L11.0491 3.21715V12C11.0491 12 11.6211 12 11.9993 12C12.3321 12 12.9494 12 12.9494 12V3.21715L13.99 4.24604C14.171 4.42498 14.6625 4.87217 14.6625 4.87217L16 3.6179C16 3.6179 15.5375 3.12183 15.3323 2.91892Z"
                fill="#222222"
              />
              <path
                opacity="0.4"
                d="M7.33227 9.08108L4.66285 11.7204C4.28581 12.0932 3.69763 12.0932 3.3206 11.7204L0.666257 9.08108C0.452646 8.86988 0 8.3821 0 8.3821L1.38915 7.12783C1.38915 7.12783 1.88478 7.63163 2.00851 7.75396L3.04913 8.78285V0C3.04913 0 3.62108 0 3.99926 0C4.33205 0 4.9494 0 4.9494 0V8.78285L5.99002 7.75396C6.171 7.57502 6.66251 7.12783 6.66251 7.12783L8 8.3821C8 8.3821 7.53749 8.87817 7.33227 9.08108Z"
                fill="#222222"
              />
            </svg>
          </button>
          <button className="comment__controls-best-sorting">ЛУЧШИЕ</button>
          <button className="comment__controls-actual-sorting">
            АКТУАЛЬНЫЕ
          </button>
        </div>
        <button className="comment__controls-response-sorting">
          С диалогами
          <svg xmlns="http://www.w3.org/2000/svg">
            <rect height="2" width="18" x="0" y="0"></rect>
            <rect height="2" width="18" x="0" y="5"></rect>
            <rect height="2" width="18" x="0" y="10"></rect>
          </svg>
        </button>
      </div>
    </div>
  );
};
