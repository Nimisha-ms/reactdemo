import "./css/style.css";
import {useState} from "react";

const WeatherApp = () => {   

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    
    
    return(
        <>
            <div className="box">
                <div className="search-wrapper">
                    <input type="search"   
                    name="Search"                 
                    id="Search"
                    className=""
                    onChange={(event) => { setCity(event.target.value) }
                    }
                    />
                    
                </div>
          

            <div className="info">
                    <h2 className="location"></h2> 
                    <i class="fas fa-street-view fa-5x"></i>{city}
                    <h2 className="temp">
                    5.25 Cel
                    </h2>
                    <h3 className="tempmin_max">Min : 5.25 Cel | Max: 5.25 cel</h3>
            </div>

          

            </div>
        </>
    )
}

export default WeatherApp;

