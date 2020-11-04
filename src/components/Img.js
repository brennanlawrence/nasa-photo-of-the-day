import React from "react";
import "../App.css";

const Img = (props) => {
    const { todaysPhoto } = props;

    return (
        <div className="img-container">
            <img src={todaysPhoto} alt="Space"></img>
        </div>
    );
};

export default Img;