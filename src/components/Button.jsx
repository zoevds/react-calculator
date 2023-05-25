import propTypes from 'prop-types';

const buttonStyles = {
    normal: 'bg-gray-400 hover:bg-orange-700',
    gray: 'bg-gray-600 hover:bg-gray-400',
    orange: 'bg-orange-700 hover:bg-gray-600'
}

export function Button(props) {
    return (
        <button
            className={`font-bold text-black rounded-lg px-10 py-5 ${buttonStyles[props.style || 'normal']} ${props.className}`}>{props.buttonLabel}
        </button>

    )
}

Button.propTypes = {
    buttonLabel: propTypes.string,
    style: propTypes.string,
    className: propTypes.string
}
