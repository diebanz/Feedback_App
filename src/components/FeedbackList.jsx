import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

import FeedbackItem from "./FeedbackItem";

function FeedbackList({ deleteHandler }) {
    const { feedback } = useContext(FeedbackContext);

    if (!feedback || feedback.length === 0) {
        return <p> No feedback yet! </p>;
    } else {
        console.log(feedback);
    }
    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem
                            key={item.id}
                            item={item}
                            deleteHandler={deleteHandler}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}

export default FeedbackList;
