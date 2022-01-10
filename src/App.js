import { useState } from "react";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <main>
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <>
                                    <FeedbackForm handleAdd={addFeedback} />
                                    <FeedbackStats />
                                    <FeedbackList
                                        deleteHandler={deleteFeedback}
                                    />
                                    <AboutIconLink />
                                </>
                            }
                        ></Route>
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </main>
            </Router>
        </FeedbackProvider>
    );
}

export default App;
