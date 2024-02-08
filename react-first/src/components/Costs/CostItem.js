import './CostItem.css'
import CostDate from './CostDate';
import Card from '../UI/Card';

function CostItem(props) {

    return (
        <li>
            <Card className="cost-item">
                <CostDate date={props.date}/>
                <div className="cost-item__description">
                    <h2>{props.title}</h2>
                    <div className="cost-item__price">{props.amount.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    })}</div>
                </div>
            </Card>
        </li>
    );
}

export default CostItem;