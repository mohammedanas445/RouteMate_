import React, { useState} from "react";
import { AiOutlineSwap } from "react-icons/ai";

const TrainTravelForm = () => {
    const [fromCityName, setFromCityName] = useState("");
    const [toCityName, setToCityName] = useState("");
    const [departureDate, setDepartureDate] = useState("");

    const handleFromCityChange = (e) => {
        setFromCityName(e.target.value);
    };

    const handleToCityChange = (e) => {
        setToCityName(e.target.value);
    };

    const handleDateChange = (e) => {
        setDepartureDate(e.target.value);
    };

    return ( 
        <div className="TravelForm">
            <div className="form">
                <div className="fromTo">
                    <div className="fromCity">
                        <p>From:</p>
                        <label htmlFor="fromCityName">
                            <input type="text" id="fromCityName" value={fromCityName} onChange={handleFromCityChange}/>
                            <p id="stationName">Secunderabad(SC)</p>
                        </label>
                    </div>
                    <AiOutlineSwap style={{ cursor: "pointer"}} />
                    <div className="toCity">
                        <p>To:</p>
                        <label htmlFor="toCityName">
                            <input type="text" id="toCityName" value={toCityName} onChange={handleToCityChange}/>
                            <p id="stationName">Kanpur Central(CNB)</p>
                        </label>
                    </div>
                </div>
                <div className="travelDate">
                    <p>Date:</p>
                    <label htmlFor="departureDate" className="Date">
                        <input type="date" id="departureDate" value={departureDate} onChange={handleDateChange}/>
                    </label>
                </div>
            </div>

            <div className="submit">
                <button type="submit">Submit</button>
            </div>
        </div>
     );
}
 
export default TrainTravelForm;