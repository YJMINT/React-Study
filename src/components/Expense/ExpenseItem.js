import React, {useState} from "react";
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
//function ExpenseItem(props) {
const ExpenseItem = (props) => {
    // const expenseDate = new Date(2023, 2, 28); //month는 0부터 시작하기 때문에 3월은 2이다.
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle("Updated!!");
        console.log(title);
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}
export default ExpenseItem;
