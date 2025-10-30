


interface ButtonProps{
    type?: 'button' | 'reset'| 'submit';
    text: string;
    onClick?: () => void;
    disabled?: boolean;
}


function Button({type, text, onClick, disabled=false}: ButtonProps){

    return <button type={type} disabled={disabled} onClick={onClick}>
        {text}
        </button>
}

export default Button;