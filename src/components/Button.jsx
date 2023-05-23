import propTypes from 'prop-types';
const buttonStyles ={
    normal
}
const Button = (props) => {
    return (
        <button className={"bg-gray-400 font-bold text-black rounded-lg px-10 py-5 hover:bg-orange-700"}>
            <div className={"bg-gray-600 text-black rounded-lg px-8 py-6 hover:bg-gray-400"}>

            {props.buttonLabel}
            </div>
        </button>
    )
}
Button.propTypes = {
    buttonLabel: propTypes.string
}
export default Button;