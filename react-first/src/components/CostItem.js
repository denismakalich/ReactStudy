import './CostItem.css'
import CostDate from './CostDate';

function CostItem(props) {

    return (
        <div className="cost-item">
            <CostDate date={props.date}/>
            <div className="cost-item__description">
                <h2>{props.title}</h2>
                <div className="cost-item__price">{props.amount.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                })}</div>
            </div>
        </div>
    );
}

export default CostItem;