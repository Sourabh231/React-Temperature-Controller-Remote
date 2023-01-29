import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'


function App() {
  const[temperaturecount,settemperaturecount]= useState(20);
  const[temperaturcolor,settemperaturcolor]= useState("mediumhot");

  function increasecount(){
    settemperaturecount(temperaturecount+1)

    if(temperaturecount>=30){
      settemperaturcolor("extremhot")
    }
    else if(temperaturecount>=20){
      settemperaturcolor("mediumhot")
    }
    else if(temperaturecount>=15 ){
      settemperaturcolor("hot")
    }
    else if(temperaturecount>=10){
      settemperaturcolor("cold")
    }
    else if(temperaturecount>=5){
      settemperaturcolor("mediumcold")
    }
    else if(temperaturecount>=1 && temperaturecount<5){
      settemperaturcolor("extremcold")
    }
  }
  function decrementcount(){
    settemperaturecount(temperaturecount-1);
    if(temperaturecount>=30){
      settemperaturcolor("extremhot")
    }
    else if(temperaturecount>=20){
      settemperaturcolor("mediumhot")
    }
    else if(temperaturecount>=15 ){
      settemperaturcolor("hot")
    }
    else if(temperaturecount>=10){
      settemperaturcolor("cold")
    }
    else if(temperaturecount>=5){
      settemperaturcolor("mediumcold")
    }
    else if(temperaturecount>=1 && temperaturecount<5){
      settemperaturcolor("extremcold")
    }
    
  }
  return (
    <div>
       <h1>Tempearature Controler</h1>
    <div className="App">
      <div className="Temp-display-container">
           <div className= {`temp-display ${temperaturcolor}`}>{temperaturecount}ºC</div>
      </div>
      <div className="button">
        <button id="add" onClick={()=>increasecount()}>+</button> {/*settemperaturecount(temperaturecount+1)*/}
        <button id="minus" onClick={()=>decrementcount()}>-</button>
      </div>
      
    </div>
    </div>
  );
}

export default App;
