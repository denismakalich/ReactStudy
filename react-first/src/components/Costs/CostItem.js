import './CostItem.css'
import CostDate from './CostDate';
import Card from '../UI/Card';
import React, {useState} from "react";

function CostItem(props) {

    const [title, setTitle] = useState(props.title);

    const changeTitleHandler = () => {
        setTitle("New cost");
    }

    return (
        <Card className="cost-item">
            <CostDate date={props.date}/>
            <div className="cost-item__description">
                <h2>{title}</h2>
                <div className="cost-item__price">{props.amount.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                })}</div>
                <button onClick={changeTitleHandler}>Изменить описание</button>
            </div>
        </Card>
    );
}

export default CostItem;