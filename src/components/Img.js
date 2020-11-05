import React from "react";
import "../App.css";
import { CardImg } from "reactstrap";

const Img = (props) => {
    const { todaysPhoto } = props;

    return (
        <CardImg src={todaysPhoto} alt="Space"></CardImg>
    );
};

export default Img;