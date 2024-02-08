import './Costs.css';
import Card from '../UI/Card';
import CostFilter from "../CostFilter/CostFilter.js";
import CostList from "./CostList";
import React, {useState} from "react";
import CostsDiagram from "./CostsDiagram";

function Costs(props) {

    const [selectedYear, setSelectedYear] = useState('2021');

    const yearChangeHandler = (year) => {
        setSelectedYear(year)
    };

    const filteredCosts = props.costs.filter(cost => cost.date.getFullYear().toString() === selectedYear.toString());

    return (
        <div>
            <Card className="costs">
                <CostFilter year={selectedYear} onChangeYear={yearChangeHandler} />
                <CostsDiagram costs={filteredCosts}/>
                <CostList costs={filteredCosts}/>
            </Card>
        </div>
    );
}

export default Costs;