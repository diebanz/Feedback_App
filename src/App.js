import { useState } from "react";

import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    return (
        <>
            <Header />
            <main>
                <FeedbackList feedback={feedback} />
            </main>
        </>
    );
}

export default App;
