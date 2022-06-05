import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from './CommentDetail';

if (module.hot) {
  module.hot.accept();
}


const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail/>
      <CommentDetail/>

      <CommentDetail/>

      <CommentDetail/>

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
