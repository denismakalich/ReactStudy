import React, {useState} from "react";
import './CostForm.css';

function CostForm(props) {

    const [inputTitle, setInputTitle] = useState("");
    const [inputAmount, setInputAmount] = useState("");
    const [inputDate, setInputDate] = useState("");

    const titleChangeHandler = (event) => {
        setInputTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        console.log(event.target.value)
        setInputAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            title: inputTitle,
            amount: Number(inputAmount),
            date: new Date(inputDate)
        }

        props.onSaveCostData(costData);

        setInputTitle('')
        setInputAmount(0);
        setInputDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input type="text" value={inputTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input type="number" min="0.01" step="0.01" value={inputAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Дата</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={inputDate}
                           onChange={dateChangeHandler}/>
                </div>
                <div className="new-cost__actions">
                    <button type="submit">Добавить расход</button>
                    <button type="button" onClick={props.onCancel}>Отмена</button>
                </div>
            </div>
        </form>
    );
}

export default CostForm;