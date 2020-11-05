import React from "react";
import { CardTitle, CardText } from "reactstrap";

const Info = (props) => {
    const { todaysTitle, todaysText } = props;

    return (
        <div>
            <CardTitle tag="h3">{todaysTitle}</CardTitle>
            <CardText>{todaysText}</CardText>
        </div>
    );
};

export default Info;