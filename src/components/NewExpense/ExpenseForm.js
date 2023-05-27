import React , {useState} from 'react';
import './ExpenseForm.css';

const ExpenseFrom = () => {

    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    const [userInput, setUserInput] = useState({ //업데이트 시 3가지 상태를 전부 업데이트 해야함!
        enteredTitle: ',',
        enteredAmount: ',',
        enteredDate: ','
    });
    //vanilla JS
    // document.getElementById('').addEventListener('click', (event) => {});
    const titleChangeHandler = (event) => { //event는 외부에서 들어온 입력값
        //setEnteredTitle(event.target.value); //개발자 도구에 들어가서 보면, event의 프로퍼티 중 target -> value에 들어가서 보면 내가 작성한 값이 있어.
                                        // 그래서 이렇게 접근하는 거야. (target.value 가 괜히 있는게 아니구나ㅎㅎ)
        setUserInput ({
            ...userInput,
            enteredTitle : event.target.value,
        })
    };
    const amountChangeHandler = (event) => {
        // setEnteredAmount(event.target.value);
        setUserInput ({
            ...userInput,
            enteredAmount : event.target.value,
        })
    };
    const dateChangeHandler = (event) => {
        //setEnteredDate(event.target.value);
        setUserInput ({
            ...userInput,
            enteredDate : event.target.value,
        })
    };



    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
    </form>
    );
};
export default ExpenseFrom;