import React from "react";
import PropTypes from "react";

import Card from "../UI/Card";

function FeedbackItem({ item }) {
    // const clickHandler = () => {
    //     setRating((prev) => {
    //         return prev + 1;
    //     });
    // };

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
            {/* <button onClick={clickHandler}>Click</button> */}
        </Card>
    );
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default FeedbackItem;
