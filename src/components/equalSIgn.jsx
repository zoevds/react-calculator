import propTypes from 'prop-types';
const EqualSign = (props) => {
    return (
        <equalSign className={"bg-orange-700 font-bold text-center text-black col-span-2 rounded-lg px-10 py-5 hover:bg-gray-600"}>{props.equalLabel}</equalSign>
    )
}
EqualSign.propTypes = {
    equalLabel: propTypes.string
}
export default EqualSign;