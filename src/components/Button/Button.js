import './Button.scss'

const Button = ({ label, variant, size, onClick }) => {
    const classNames = `button ${variant} ${size}`;

    return (
        <button className={classNames} onClick={onClick}>
            {label}
        </button>
    )
}

export default Button