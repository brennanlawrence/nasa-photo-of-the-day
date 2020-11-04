import React from "react";
import Img from "./Img.js";
import Info from "./Info.js";

const Container = (props) => {
    const { todaysPhoto, todaysTitle, todaysText } = props;

    return (
        <div className="App-container">
            <div className="img">
              <Img todaysPhoto={todaysPhoto}></Img>
            </div>
            <div className="info">
            <Info todaysTitle={todaysTitle} todaysText={todaysText}></Info> 
            </div>
        </div>
    )
}

export default Container;