import axios from "axios";
import React, { useState } from "react";

function Weather() {
    const [city, setCity] = useState();
    const [weather, setWeather] = useState();
    function cityName(e){
        // console.log(e.target.value)
        setCity(e.target.value)
    }
    const fetchWeather = async ()=>{
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'222bfbce3518e47753f35b43293092b6'}`)
            setWeather(response)
        }
        catch(error){
            console.log("Error fetching weather data",error)

        }
    }
    
    const handleClick = (e)=>{
        fetchWeather();
        
    }

  return (
    <div className="flex flex-col items-center w-[800px] h-[450px] mt-4 rounded-sm bg-emerald-600">
      <input
        className=" my-10 p-4 w-36 rounded-md"
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={cityName}
      />
      <button onClick={handleClick} className="bg-white border-2 py-1 px-2 border-black w-26 rounded-md ">
        Get Weather
      </button>
      {weather && (<>
        <div>
            <h1 className=" font-bold text-4xl text-white mt-16">{weather.data.name}</h1>
            <p className="my-6 text-2xl">Temp is: {Math.round(weather.data.main.temp - 273)}</p>
            <p className="my-6 text-xl">{weather.data.weather[0].description}</p>
        </div>
      </>)}
      
      
      
    </div>
  );
}

export default Weather;
