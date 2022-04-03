const Nav = ({setCity, setTab})=>{
  const cityChange = (city)=>{
    if(city.length>0){
      setCity(city)
    }
  }

  const tabChange = (tab)=>{
    setTab(tab)
  }
  return(
    <div>
      <label htmlFor="city">{'Enter city name : '}</label>
      <input type='text' name="city" className="city" defaultValue='ranchi'/>
      <button type="submit" onClick={()=>cityChange(document.getElementsByClassName('city')[0].value)}>Submit</button>
      <label style={{marginLeft: '30px'}} htmlFor="tab">{"API tab: "}</label>
      <select name="tab" onChange={(e)=>tabChange(e.target.value)}>
        <option value="current">Current</option>
        <option value="forecast">Forecast</option>
      </select>
    </div>
  );
}

export default Nav;