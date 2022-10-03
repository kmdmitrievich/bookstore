import React from "react";
import "./NewsLatter.css";

const NewsLatter = () => {
    return (
        <div className="block-newsletter">
            <div className="newsletter-signup">
                <h3>
                    SUBSCRIPE TO NEWSLATTER
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, recusandae!
                </p>
            </div>
            <div className="input-newslatter">
                <input type="email" placeholder="test@youremail.com"></input>
                <p>
                    <button className="input-newslatter-button">SIGNUP</button>
                </p>
            </div>
        </div>
    )
}

export { NewsLatter }