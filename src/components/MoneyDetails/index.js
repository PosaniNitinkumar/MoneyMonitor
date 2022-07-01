import './index.css'

const CommentItem = () => (
  <li className="list">
    <div className="Balance">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        alt="balance"
        className="image"
      />
      <div className="card">
        <p>Your Balance</p>
        <p>Your Balance</p>
      </div>
    </div>
    <div className="income">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        alt="income"
        className="image"
      />
      <div className="card">
        <p>Your Balance</p>
        <p>Your Balance</p>
      </div>
    </div>
    <div className="Expenses">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        alt="expenses"
        className="image"
      />
      <div className="card">
        <p>Your Balance</p>
        <p>Your Balance</p>
      </div>
    </div>
  </li>
)

export default CommentItem
