import React from "react";
class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      content: "",
    };
  }
  componentDidMount() {
    this.textarea.focus();
    this._loadUsername();
  }

  _loadUsername() {
    this.setState({ username: localStorage.getItem("username") });
  }
  _saveUsername(username) {
    localStorage.setItem("username", username);
  }

  handleUsernameBlur(e) {
    this._saveUsername(e.target.value);
  }
  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }
  handleContentChange(e) {
    this.setState({ content: e.target.value });
  }
  handleSubmit() {
    if (!this.state.username) {
      alert("input 输入用户名");
    }
    if (this.props.onSubmit) {
      //  解析数据然后返回
      // const { username, content } = this.state;
      // this.props.onSubmit({ username, content });
      // 直接使用
      // this.props.onSubmit(this.state);

      // 更新
      this.props.onSubmit({ ...this.state, createTime: +new Date() });
    }
    this.setState({ content: "" });
  }

  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input
              value={this.state.username}
              onBlur={this.handleUsernameBlur.bind(this)}
              onChange={this.handleUsernameChange.bind(this)}
            ></input>
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea
              ref={(textarea) => (this.textarea = textarea)}
              value={this.state.content}
              onChange={this.handleContentChange.bind(this)}
            />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit.bind(this)}>发布</button>
        </div>
      </div>
    );
  }
}
export default CommentInput;
