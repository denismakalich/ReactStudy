import './CostDate.css';

function CostDate(props) {
    const day = props.date.toLocaleString('ru-RU', {day: "2-digit"});
    const month = props.date.toLocaleString('ru-RU', {month: "long"});
    const year = props.date.getFullYear();

    return (
        <div class="cost-date">
            <div class="cost-date__day">{day}</div>
            <div class="cost-date__month">{month}</div>
            <div class="cost-date__year">{year}</div>
        </div>
    )
}

export default CostDate;