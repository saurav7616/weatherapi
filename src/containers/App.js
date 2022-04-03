import { useEffect, useState } from 'react';
import Dashboard from '../components/Dashboard.js';
import Nav from '../components/Nav.js';
import './App.css';

function App() {
  const [city, setCity] = useState('Ranchi');                     //city as state variable
  const [tab, setTab] = useState('current');                      //tab(current, forecast) as state variable
  const [data, setData] = useState({})                            //data received from custom api endpoint

  useEffect(()=>{
    fetch(`https://cryptic-thicket-72101.herokuapp.com/${tab}?city=${city}`)   //fetching api when city or tab changes
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  },[city, tab])
  return (
    <div className="App">
      <Nav setCity={setCity} setTab={setTab}/>
      <Dashboard data={data} tab={tab}/>
      <h4 className='note'>{"*NOTE : Click on labels to edit."}</h4>
    </div>
  );
}

export default App;