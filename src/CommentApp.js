import React from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import wrapWithLoadData from "./wrapWithLoadData";

class CommentApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comments: props.data };
  }

  handleSubmit(comment) {
    if (!comment) return;
    if (!comment.username) return alert("请输入用户名");
    if (!comment.content) return alert("请输入评论内容");
    const newComments = this.state.comments.concat(comment);
    // console.log(this.state.comments);
    console.log(newComments);

    this.setState({ comments: newComments });
    this.props.saveData(newComments);
  }
  handleDeleteComment(index) {
    console.log(index);
    const comments = this.state.comments;
    this.state.comments.splice(index, 1);
    this.setState({ comments });
    this.props.saveData(comments);
  }
  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmit.bind(this)} />
        <CommentList
          comments={this.state.comments}
          onDeleteComment={this.handleDeleteComment.bind(this)}
        />
      </div>
    );
  }
}
CommentApp = wrapWithLoadData(CommentApp, "comments");
export default CommentApp;
