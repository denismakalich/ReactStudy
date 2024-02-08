import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";
import React, {useState} from "react";

const initial_costs = [
    {
        id: 'c1',
        date: new Date(2024, 0, 15),
        title: "Холодильник",
        amount: 999.99
    },
    {
        id: 'c2',
        date: new Date(2024, 0, 16),
        title: "Телевизор",
        amount: 799.99
    },
    {
        id: 'c3',
        date: new Date(2024, 0, 17),
        title: "Шкаф",
        amount: 299.99
    }
];

function App() {
    const [costs, setCosts] = useState(initial_costs);

    const addCostHandler = (cost) => {
        setCosts(prevCosts => {
            return [cost, ...prevCosts]
        });
    };

    return(
        <div>
            <NewCost onAddCost={addCostHandler}/>
            <Costs costs={costs}/>
        </div>
    );
}

export default App;