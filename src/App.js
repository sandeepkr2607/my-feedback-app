import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./components/pages/About";
import AboutIconLink from "./components/shared/AboutIconLink";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  function deleteFeedback(id) {
    if (window.confirm("Are you sure...?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  return (
    <BrowserRouter>
      <Header
        title={"FeedBack UI"}
        bgColor={"rgba(0,0,0,0.4)"}
        textColor={"#ff6a95"}
      />

      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </div>
      <AboutIconLink />
    </BrowserRouter>
  );
}

export default App;
