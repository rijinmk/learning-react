import React, { useEffect, useState } from 'react'

export const Weather = () => {

    const [weatherDataState, setWeatherDataState] = useState(null); 

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                console.log("[Weather.js]: ", position); 
                let latitude = position.coords.latitude; 
                let longitude = position.coords.longitude; 

                let weatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=d96fd08f487348c0277372130a6ab12e`);
                weatherData = await weatherData.json(); 
                console.log(weatherData);
                setWeatherDataState(weatherData);
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }, []);

    return (
        <div>
            {weatherDataState ? 
                <>
                    <p>{weatherDataState.main.feels_like}°C</p>
                    <p>{weatherDataState.weather[0].description}</p>
                    <p>{weatherDataState.name}</p>
                </>
            : null}
        </div>
    )
}
