import React from "react";
import Card from "../UI/Card";
import { Link } from "react-router-dom";

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About this Project</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Labore, saepe.
                </p>
                <p>
                    <Link to="/">Back to home</Link>
                </p>
            </div>
        </Card>
    );
}

export default AboutPage;
