import React from "react";
import './ExpenseDate.css';

/**
 * date 넘겨주면 정형화된 date 넘겨줌.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month : 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', {month : '2-digit'});

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )

}

export default ExpenseDate;