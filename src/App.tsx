import "./App.scss";

import { useEffect, useState } from "react";

import { Comment } from "./interfaces/comment";

import { CommentComponent } from "./components/CommentComponent";
import { CommentForm } from "./components/CommentForm";
import { CommentControls } from "./components/CommentControls/CommentControls";

function App() {
  async function fetchData() {
    const url =
      "https://www.sports.ru/gql/graphql/?query=%7BcommentQueries%20%7Blist%20%28objectClass%3A%20POST%2C%20objectId%3A%20%223262346%22%2C%20order%3A%20BEST%2C%20first%3A%2010%29%20%7Bcomments%20%7Bid%20text%20author%20%7Bnick%7D%20published%20%7Bbunin%7D%20rating%20%7Bplus%20minus%7D%20parentComment%20%7Bid%20author%20%7Bnick%7D%20text%7D%7D%7D%7D%7D";

    const res = await fetch(url);

    const data = await res.json();

    return data.data.commentQueries.list.comments;
  }

  const [data, setData] = useState<Comment[]>([]);

  const handleNewComment = (value: Comment): void => {
    setData([...data, value]);
  };

  useEffect(() => {
    fetchData().then((data) => setData(data));
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
