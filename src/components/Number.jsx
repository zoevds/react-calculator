import propTypes from 'prop-types';
const Number = (props) => {
    return (
        <number className={"bg-gray-600 text-black rounded-lg px-8 py-6 hover:bg-gray-400"}>{props.numberLabel}</number>
    )
}
Number.propTypes = {
    numberLabel: propTypes.string
}
export default Number;