import {Component} from 'react'
import CommentItem from '../MoneyDetails'

import './index.css'

class MoneyManager extends Component {
  state = {
    nameInput: '',
    commentInput: '',
  }

  render() {
    const {nameInput, commentInput} = this.state
    return (
      <div className="main">
        <div className="background">
          <h1>hi, Richard</h1>
          <p>Welcome back to your Money Manager</p>
        </div>
        <CommentItem />
        <div className="third">
          <div className="transaction">
            <form className="form" onSubmit={this.onAddComment}>
              <p className="form-description">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                className="name-input"
                placeholder="Your Name"
                value={nameInput}
                onChange={this.onChangeNameInput}
              />
              <textarea
                placeholder="Your Comment"
                className="comment-input"
                value={commentInput}
                onChange={this.onChangeCommentInput}
                rows="6"
              />
              <button type="submit" className="add-button">
                Add Comment
              </button>
            </form>
          </div>
          <div className="history">
            <h1>hello</h1>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
