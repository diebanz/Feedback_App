import React from "react";
import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, deleteHandler }) {
    if (!feedback || feedback.length === 0) {
        return <p> No feedback yet! </p>;
    } else {
        console.log(feedback);
    }
    return (
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItem
                    key={item.id}
                    item={item}
                    deleteHandler={deleteHandler}
                />
            ))}
        </div>
    );
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ),
};

export default FeedbackList;
