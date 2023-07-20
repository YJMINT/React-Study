import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) =>  {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear; //선택한 연도와 같은 경우 true 아닐경우 false 반환
    });

    let expenseContext =  <p>No expense found.</p>;

    if (filteredExpenses. length > 0) {
        expenseContext = filteredExpenses.map((expense) => (
            <ExpenseItem
            key = {expense.id} //목록의 아이템을 매핑할 때는 반드시 key가 있어야 한다.
            title = {expense.title}
            amount = {expense.amount}
            date = {expense.date}
            />
        ));
    }

    return (
    <div>
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {expenseContext}
        </Card>
    </div>
    )
}

export default Expenses;
