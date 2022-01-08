import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

function FeedbackForm() {
    const [text, setText] = useState("");

    const textChangeHandler = (e) => {
        setText(e.target.value);
    };

    return (
        <Card>
            <form>
                <h2>How would you rate your service with us</h2>
                {/* {state} */}
                <div className="input-group">
                    <input
                        onChange={textChangeHandler}
                        type="text"
                        placeholder="Write a review"
                        value={text}
                    />
                    <Button type="submit">Send</Button>
                </div>
            </form>
        </Card>
    );
}

export default FeedbackForm;
