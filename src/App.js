import { useState } from "react";

import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    return (
        <>
            <Header />
            <main>
                <FeedbackForm />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                    feedback={feedback}
                    deleteHandler={deleteFeedback}
                />
            </main>
        </>
    );
}

export default App;
