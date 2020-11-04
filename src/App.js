import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios"
import Header from "./components/Header.js"
import Container from "./components/Container.js";

function App() {

    const [data, setData] = useState(null);
    const [todaysDate, setTodaysDate] = useState();
    const [todaysPhoto, setTodaysPhoto] = useState();
    const [todaysTitle, setTodaysTitle] = useState();
    const [todaysText, setTodaysText] = useState();

    useEffect(() => {
      Axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(res => {
          setData(res.data)
          
        })
        .catch(err => console.log(err));
        
      }, []);
      console.log(data);
      
    useEffect(() => {
      if(data) {
        setTodaysDate(data.date);
        setTodaysPhoto(data.url);
        setTodaysTitle(data.title);
        setTodaysText(data.explanation);
      }
    }, [data]);



  return (
    <div className="App">
      <div>
        <Header className="Header" todaysDate={todaysDate}></Header>
      </div>
      <div>
        <Container 
          className="Container" 
          todaysPhoto={todaysPhoto}
          todaysTitle={todaysTitle}
          todaysText={todaysText} 
        ></Container>
      </div>
    </div>
  );
}

export default App;
