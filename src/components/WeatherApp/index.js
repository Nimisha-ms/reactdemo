import "./css/style.css";
import {useState, useEffect} from "react";

const WeatherApp = () => {   

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect( () => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4ec34044ffd607be03899eb8b6e0dbbd`
            const response = await fetch(url);            
            const resJson = await response.json();
            console.log(resJson.main);
            setCity(resJson.main);
        }

        fetchApi();
    },[search]);  
    
    return(
        <>
            <div className="box">

            <div className="search-box">
                            <input 
                                type="text"
                                className="search-bar"
                                value={search}
                                placeholder="Search..."
                                onChange={e => setSearch(e.target.value)}           
                                
                            />
               
            </div>

                {!city ? (<p>No Data Found</p>) : (
                    <div>
                    <div className="location-box">
                    <div className="location"></div>

                    <i className="fas fa-street-view fa-5x"></i> <span className="locationfont">{search}</span>
                            <h2 className="temp">
                            {city.temp}°Cel
                            </h2>
                            <h3 className="tempmin_max">Min : {city.temp_min}°Cel | Max: {city.temp_max}°Cel </h3>                    
                    </div>
                    </div>
                )}              

            </div>
        </>
    )
}

export default WeatherApp;

