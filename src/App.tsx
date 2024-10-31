import "./App.scss";

import { useEffect, useState } from "react";

import { Comment } from "./interfaces/comment";

import { CommentComponent } from "./components/CommentComponent";
import { CommentForm } from "./components/CommentForm";
import { CommentControls } from "./components/CommentControls/CommentControls";
import { getComments } from "./api/api";

function App() {
  const [data, setData] = useState<Comment[]>([]);

  const handleNewComment = (value: Comment): void => {
    setData([...data, value]);
  };

  useEffect(() => {
    getComments().then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <section className="comments-controls__container container">
        <CommentControls length={data.length} />
      </section>
      <section className="comment-input__container container">
        <CommentForm handleNewComment={handleNewComment} length={data.length} />
      </section>
      <section className="comments__container container">
        {data.map((comment) => (
          <CommentComponent
            handleNewComment={handleNewComment}
            comment={comment}
            key={comment.id}
            length={data.length}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
