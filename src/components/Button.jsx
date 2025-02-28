function Button({ action, label }) {
    return <button onClick={action}>{label}</button>
}

export default Button