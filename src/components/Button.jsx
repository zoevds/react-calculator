import propTypes from 'prop-types';
import { useCalculatorDispatch } from "../contexts/Calculator.jsx";

const buttonStyles = {
    normal: 'bg-gray-400 hover:bg-orange-700',
    gray: 'bg-gray-600 hover:bg-gray-400',
    orange: 'bg-orange-700 hover:bg-gray-600'
}

export function Button(props) {
    const calculatorDispatch = useCalculatorDispatch();

    const handleButton = (input) => {
        if (input === 'AC') {
            calculatorDispatch({ type: 'clear' });
            return;
        }
        if (input === '=') {
            calculatorDispatch({ type: 'evaluate' });
            return;
        }
        if (input === '×') {
            input = '*';
        }
        if (input === '÷') {
            input = '/';
        }
        calculatorDispatch({ type: 'input', input });
    };
    return (
        <button onClick={() => handleButton(props.buttonLabel)}
            className={`font-bold text-black rounded-lg px-10 py-5 ${buttonStyles[props.style || 'normal']} ${props.className}`}>{props.buttonLabel}
        </button>

    )
}

Button.propTypes = {
    buttonLabel: propTypes.string,
    style: propTypes.string,
    className: propTypes.string
}
