import propTypes from 'prop-types';
const Sign = (props) => {
    return (
        <sign className={"bg-orange-700 text-black rounded-lg px-10 py-5 text-center font-bold hover:bg-gray-600"}>{props.signLabel}</sign>
    )
}
Sign.propTypes = {
    signLabel: propTypes.string
}
export default Sign;