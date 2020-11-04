import React from "react";
import "./Header.css";
import "../App.css"

const Header = (props) => {
    const { todaysDate } = props;
    return (
        <div className="App-header">
            <div className="site-title">
                <h1>NASA Photo of the Day</h1>
            </div>
            <div className="date-section">
                {todaysDate}
            </div>
        </div>
    );
};

export default Header;