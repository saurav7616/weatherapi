const Dashboard = ({data, tab})=>{

  //handling label change
  const handleChange = (new_value,old_value)=>{
    if(new_value != old_value){
      fetch(`https://cryptic-thicket-72101.herokuapp.com/labelchange?tab=${tab}`,{      //fetching label change api endpoint
        method: 'post',
			  headers: {'Content-Type': 'application/json'},
			  body: JSON.stringify({
				  new_label: new_value,
				  current_label: old_value
			  })
      })
      .then(res => res.json())
      .then(data => window.confirm(data))
      .catch(err => window.alert(err))
    }
  }

  return(
    <div style={{margin: '50px auto 0px auto', width: '50%'}}>
      
      {/* ----------------------mapping received data--------------------- */}
      { Object.keys(data).map((ele,index) => {
          return  <div key={index}>
                    <span style={{ width: '30%' ,display:'inline-flex', justifyContent: 'space-between'}}>
                      <span 
                        onBlur={(e)=>handleChange(e.target.textContent, ele)}
                        style={{fontWeight: 'bolder'}}
                        contentEditable={true}
                      >
                        {ele}
                      </span>
                      <i>{':'}</i>
                    </span>
                    <span style={{paddingLeft : '10px'}}>{data[ele]}</span>
                  </div>})
      }  
    </div>
  );
}

export default Dashboard;