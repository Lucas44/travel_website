import React, { useState } from "react";
import Header from '../components/Header';
import Infobox from '../components/Infobox';
import ReactTooltip from "react-tooltip";
import MapChart from "../components/MapChart";
import "../index.css";

function Home() {
  const [content, setContent] = useState("");
  return (<div> 
    <div className='container'>
      <Header title='Travel Website'/>
      <Infobox />
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>

  </div>);
}

export default Home;
