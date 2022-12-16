import "../styles/Button.scss";

function Button({ text, buttonType, buttonFuction }) {
  return (
    <button className={buttonType} onClick={buttonFuction}>
      {text}
    </button>
  );
}

export default Button;
