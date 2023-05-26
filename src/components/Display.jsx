import {useCalculator} from "../contexts/calculator.jsx";
const Display = () => {
    const calculator = useCalculator();
    return(
        <div className={"bg-gray-400 rounded-lg m-5 text-3xl font-bold text-black font-display text-right p-7"}>
           <span className={`text-4xl text-bold ${!calculator.evaluationString && !calculator.result ? 'animate-blink' : ''}`}>{calculator.evaluationString || calculator.result}</span>
        </div>
    )
}
export default Display;