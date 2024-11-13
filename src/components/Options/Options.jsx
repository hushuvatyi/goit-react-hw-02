import s from "./Options.module.css";
import Button from "../Button/Button";

const Options = ({ updateFeedback, isVisible }) => {
  return (
    <div className={s.wrapper}>
      <Button handleClick={updateFeedback}>Good</Button>
      <Button handleClick={updateFeedback}>Neutral</Button>
      <Button handleClick={updateFeedback}>Bad</Button>
      {!!isVisible && <Button handleClick={updateFeedback}>Reset</Button>}
    </div>
  );
};
export default Options;
