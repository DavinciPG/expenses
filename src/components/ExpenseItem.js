import './Expenseitem.css'
import './ExpenseDate.css'

function ExpenseItem(props){
    const month = props.expenseData.date.toLocaleString('en-US', {month: 'long'})
    const day = props.expenseData.date.toLocaleString('en-US', {day: '2-digit'})
    const year = props.expenseData.date.getFullYear()

    return (
        <div className="expense-item">
            <div className="expense-date">
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__day">{day}</div>
                <div className="expense-date__year">{year}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.expenseData.title}</h2>
                <div className="expense-item__price">{props.expenseData.price}€</div>
            </div>
        </div>
    )
}

export default ExpenseItem