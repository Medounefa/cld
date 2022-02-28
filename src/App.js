import React from 'react';
import Calendrier from './Calendrier';
import  'material-icons/iconfont/material-icons.css' ;
import './App.css';

function App() {
  return (
    <div className="App">
      <Calendrier />
      < span  class =" material-icons-round " > pie_chart </ span >
      < span  class =" material-icons-two-tone " > pie_chart </ span >  
      < span  class =" material-icons-sharp " >camembert </ span > 
      <span class="material-icons-outlined">people_alt</span>
      <span class="material-icons-outlined">calendar_month</span>
      <span class="material-icons-outlined">settings</span>
      <span class="material-icons-outlined">done</span>
    </div>
  );
}

export default App;
