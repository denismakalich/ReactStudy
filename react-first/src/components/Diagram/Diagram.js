import DiagramBar from './DiagramBar';
import './Diagram.css';

const Diagram = (props) => {
    const dataSetsValues = props.dataSets.map(
        dataSet => dataSet.value
    );

    const maxMonthCosts = Math.max(...dataSetsValues)

    return (
        <div className="diagram">
            {
                props.dataSets.map(
                    dataSet => (
                        <DiagramBar
                            key={dataSet.label}
                            label={dataSet.label}
                            value={dataSet.value}
                            maxValue={maxMonthCosts}
                        />
                    )
                )
            }
        </div>
    );
}

export default Diagram;