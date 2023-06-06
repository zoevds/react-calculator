import {useCalculator} from "../contexts/calculator.jsx";

const History = () => {
    const calculator = useCalculator();

    return (
        <>
            <h1>History</h1>
            {calculator.history.map((item, i) => <p key={`history_${i}`}>{item.cal}</p>)}
        </>
    )
};

export default History;