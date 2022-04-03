import { useEffect, useState } from 'react';
import Dashboard from '../components/Dashboard.js';
import Nav from '../components/Nav.js';
import './App.css';

function App() {
  const [city, setCity] = useState('Ranchi');
  const [tab, setTab] = useState('current');
  const [data, setData] = useState({})

  useEffect(()=>{
    fetch(`https://cryptic-thicket-72101.herokuapp.com/${tab}?city=${city}`)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  },[city, tab])
  return (
    <div className="App">
      <Nav setCity={setCity} setTab={setTab}/>
      <Dashboard data={data} tab={tab}/>
    </div>
  );
}

export default App;