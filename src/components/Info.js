import React from "react";


const Info = (props) => {
    const { todaysTitle, todaysText } = props;

    return (
        <div className="info-container">
            <h3 className="title">
                {todaysTitle}
            </h3>
            <p className="text">
                {todaysText}
            </p>
        </div>
    );
};

export default Info;