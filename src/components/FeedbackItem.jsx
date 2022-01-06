import React from "react";

function FeedbackItem({ item }) {
    // const clickHandler = () => {
    //     setRating((prev) => {
    //         return prev + 1;
    //     });
    // };

    return (
        <div className="card">
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
            {/* <button onClick={clickHandler}>Click</button> */}
        </div>
    );
}

export default FeedbackItem;
