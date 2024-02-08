 import CostItem from "./CostItem";
import './Costs.css';
import Card from '../UI/Card';
import CostFilter from "../CostFilter/CostFilter.js";
import React, {useState} from "react";

function Costs(props){

    const [selectedYear, setSelectedYear] = useState('2021');

    const yearChangeHandler = (year) => {
        setSelectedYear(year)
    };

    const filteredCosts = props.cost.filter(cost => cost.date.getFullYear().toString() === selectedYear)

     return(
    <div>
        <Card className="costs">
            <CostFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
            {
            filteredCosts
            .map(cost => {
            return (<CostItem key={cost.id} date={cost.date} title={cost.title} amount={cost.amount}/>)
            })
            }
        </Card>
    </div>
    );
}

export default Costs;