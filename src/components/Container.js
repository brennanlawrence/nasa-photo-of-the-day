import React from "react";
import Img from "./Img.js";
import Info from "./Info.js";
import { Card, CardBody, } from "reactstrap";

const Container = (props) => {
    const { todaysPhoto, todaysTitle, todaysText } = props;

    return (
        <div className="container">
            <Card body style={{ borderColor: "#282c34"}}>
                <Img todaysPhoto={todaysPhoto}></Img>
                <CardBody class="text center">
                    <Info todaysTitle={todaysTitle} todaysText={todaysText}></Info>
                </CardBody>
            </Card>
        </div>
    )
}

export default Container;