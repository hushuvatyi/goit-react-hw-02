import { useEffect, useState } from "react";
import Descriptions from "./components/Descriptions/Descriptions";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const INIT_FEEDBACK_DATA = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const getFeedbackData = () => {
  return (
    JSON.parse(localStorage.getItem("feedback-data")) ?? INIT_FEEDBACK_DATA
  );
};

function App() {
  const [feedback, setFeedback] = useState(getFeedbackData);

  useEffect(() => {
    localStorage.setItem("feedback-data", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setFeedback(INIT_FEEDBACK_DATA);
    } else {
      setFeedback({
        ...feedback,
        [feedbackType]: feedback[feedbackType] + 1,
      });
    }
  };

  return (
    <>
      <Descriptions />
      <Options updateFeedback={updateFeedback} isVisible={totalFeedback} />
      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
