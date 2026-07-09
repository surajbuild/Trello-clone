
const Button = (props) => {
    return (
        <div className="flex button border rounded p-2 m-3 cursor-pointer items-center justify-center " onClick={props.onClick}>
            {props.left}
            {props.children}
            {props.right}
        </div>
    )
}

export default Button
