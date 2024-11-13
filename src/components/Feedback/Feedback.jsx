import s from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <ul>
      {Object.entries(feedback).map((item, idx) => {
        return (
          <li className={s.text} key={idx}>
            {item[0]}: <b>{item[1]}</b>
          </li>
        );
      })}
      <li className={s.text}>
        Total: <b> {totalFeedback}</b>
      </li>
      <li className={s.text}>
        Positive: <b> {positiveFeedback}% </b>
      </li>
    </ul>
  );
};

export default Feedback;
