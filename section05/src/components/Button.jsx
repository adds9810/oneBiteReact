const Button = ({ text, color, children }) => {
  const onClickButton = () => {
    console.log(text);
  };
  return (
    <button onClick={onClickButton}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};
Button.defaultProps = { color: Black };

export default Button;
