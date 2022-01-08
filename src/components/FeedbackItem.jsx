import React from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

import Card from "../UI/Card";

function FeedbackItem({ item, deleteHandler }) {
    // const clickHandler = () => {
    //     setRating((prev) => {
    //         return prev + 1;
    //     });
    // };

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            {
                <button
                    onClick={() => deleteHandler(item.id)}
                    className="close"
                >
                    <FaTimes color="purple" />
                </button>
            }
            <div className="text-display">{item.text}</div>
        </Card>
    );
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default FeedbackItem;
