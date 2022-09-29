import React,{ useState }  from 'react'

function SearchCity({setWeatherResult}) {
    const api = {
        key:"ef025c492275f3711711657ed6fd5373",
        base:"https://api.openweathermap.org/data/2.5/weather"
      }
      const [searchParameter,setSearchParameter] = useState("");

      const searchCity = (e) =>{
        if(e.key==="Enter"){
            fetch(`${api.base}?q=${searchParameter}&lang=en&units=metric&appid=${api.key}`)
            .then((data) =>data.json())
            .then((result)=>{
                setSearchParameter("");
                setWeatherResult(result);
                console.log(result);
                
            })
        }
      }
  return (
    <>
    <div className='search'>
         <input className='search-input' placeholder='Search city..'
         value={searchParameter}
         onChange={(e)=>setSearchParameter(e.target.value)}
         onKeyPress={searchCity}
         />
      <br></br>
      <button className="search-btn">Search</button>

    </div>
     
    
    
    </>
  )
}

export default SearchCity