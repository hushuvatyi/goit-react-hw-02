import s from "./Button.module.css";

const Button = ({ btnType = "button", handleClick, children }) => {
  return (
    <button
      className={s.btn}
      type={btnType}
      onClick={() => handleClick(children.toLowerCase())}
    >
      {children}
    </button>
  );
};
export default Button;
