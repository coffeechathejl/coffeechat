import './button.css';


type ButtonProps = {
    onClick: () => void;
    title: string;
};

export default function Button({
    onClick,
    title
}: ButtonProps) {
    return (
        <button className="login-button" onClick={onClick}>
            {title="login"}
        </button>
    );
}