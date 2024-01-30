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

     return(
    <div>
        <Card className="costs">
            <CostFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
            <CostItem date={props.costs[0].date} title={props.costs[0].title} amount={props.costs[0].amount}/>
            <CostItem date={props.costs[1].date} title={props.costs[1].title} amount={props.costs[1].amount}/>
            <CostItem date={props.costs[2].date} title={props.costs[2].title} amount={props.costs[2].amount}/>
        </Card>
    </div>
    );
}

export default Costs;