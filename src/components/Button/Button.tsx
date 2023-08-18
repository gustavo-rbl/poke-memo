type ButtonProps = {
  handleClick: () => void;
  text: string;
};

function Button({ handleClick, text }: ButtonProps) {
  return (
    <button className="button--v01 cursor--pointer fade--in" onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
