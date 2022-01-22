import React, { useState } from "react";
import Header from './components/Header';
import Infobox from './components/Infobox';
import ReactTooltip from "react-tooltip";
import MapChart from "./components/MapChart";
import "./index.css";

function App() {
  const [content, setContent] = useState("");
  return (
    <div className='container'>
      <Header title='Travel Website'/>
      <Infobox text='Travel information will go here'/>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default App;
