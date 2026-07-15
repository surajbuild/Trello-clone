
const Button = (props) => {
    return (
        <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 active:scale-95 transition-all duration-200 cursor-pointer shadow-sm" onClick={props.onClick}>
            {props.left}
            {props.children}
            {props.right}
        </div>
    )
}

export default Button
