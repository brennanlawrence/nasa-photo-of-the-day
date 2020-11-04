import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios"
import Header from "./components/Header.js"

function App() {

    const [data, setData] = useState(null);
    const [todaysDate, setTodaysDate] = useState();

    useEffect(() => {
      Axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(res => {
          setData(res.data)
        })
        .catch(err => console.log(err));
   
      }, []);

    useEffect(() => {
      if(data) {
        setTodaysDate(data.date);
      }
    }, [data]);



  return (
    <div className="App">
      <div>
        <Header className="Header" todaysDate={todaysDate}></Header>
      </div>
      <div>
        <h3>
          Title Here
        </h3>
        <p>
          Info Here
        </p>
      </div>
      <div>
        img here
      </div>
    </div>
  );
}

export default App;
