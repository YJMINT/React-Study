import React from 'react';
import ExpenseForm from "./ExpenseForm";
import './NewExpenss.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => { //ExpenseForm.js의 expenseData값을 enteredExpenseData로 받아옴
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/> {/*함수에서 포인터 전달!*/}
                {/*자식 컴포넌트인 ExpenseForm이 부모 컴포넌트인 NewExpense와 소통하는 방법*/}
            </div>
        </div>
    );
}
export default NewExpense;