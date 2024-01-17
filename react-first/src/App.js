import Costs from "./components/Costs/Costs";

function App() {
    let costs = [
        {
            date: new Date(2024, 0, 15),
            title: "Холодильник",
            amount: 999.99
        },
        {
            date: new Date(2024, 0, 16),
            title: "Телевизор",
            amount: 799.99
        },
        {
            date: new Date(2024, 0, 17),
            title: "Шкаф",
            amount: 299.99
        }
    ];

  return (
    <div>
      <h1>Start react learn</h1>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;