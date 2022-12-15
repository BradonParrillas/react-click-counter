function Button({ text, type, event }) {
  return (
    <button className={type} onClick={event}>
      {text}
    </button>
  );
}

export default Button;
