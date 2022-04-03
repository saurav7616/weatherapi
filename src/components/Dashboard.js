const Dashboard = ({data, tab})=>{

  const handleChange = (event,old_value)=>{
    let new_value = event.target.textContent
    if(new_value != old_value){
      fetch(`https://cryptic-thicket-72101.herokuapp.com/labelchange?tab=${tab}`,{
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
    <div style={{marginTop: '50px', width: '30%'}}>
      { Object.keys(data).map((ele,index) => {
          return  <div key={index}>
                    <span style={{ width: '40%' ,display:'inline-flex', justifyContent: 'space-between'}}>
                      <span 
                        onBlur={(e)=>handleChange(e, ele)}
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