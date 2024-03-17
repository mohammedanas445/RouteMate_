import React, { useState } from "react";
// import Select from "react-select"

const FlightTravelForm = () => {
    // const [fromCityName, setFromCityName] = useState("Hyderabad (HYD)")
    // const [toCityName, setToCityName] = useState("New Delhi (DEL)");
    const [departureDate, setDepartureDate] = useState("11/03/2024");


    // const handleFromCityChange = (e) => {
    //     setFromCityName(e.target.value);
    // };

    // const handleToCityChange = (e) => {
    //     setToCityName(e.target.value);
    // };

    const handleDateChange = (e) => {
        setDepartureDate(e.target.value);
    };

    return ( 
        <div >
            <div className="form">
                <div className="fromTo">
                    <div className="fromCity">
                        <p>From:</p>
                        <label htmlFor="fromCityName">
                        {/* <Select
                            // className="pankaj-input"
                            options={train_options}
                            styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                height: "60px",
                                width: "clamp(100px, 30vw, 200px)",
                                borderRadius: "10px",
                                border: "1px solid #385de1",
                                padding: " 10px",
                                marginTop: "5px",
                                fontSize: "15px",
                            }),
                            }}
                        /> */}
                            <p id="airportName">Rajiv Gandhi Internatinal Airport</p>
                        </label>
                    </div>
                    
                    <div className="toCity">
                        <p>To:</p>
                        <label htmlFor="toCityName">
                        {/* <Select
                            // className="pankaj-input"
                            options={train_options}
                            styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                height: "60px",
                                width: "clamp(100px, 30vw, 200px)",
                                borderRadius: "10px",
                                border: "1px solid #385de1",
                                padding: " 10px",
                                marginTop: "5px",
                                fontSize: "15px",
                            }),
                            }}
                        /> */}
                            <p id="airportName">Indira Gandhi Internatinal Airport</p>
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
                <button type="submit">Search</button>
            </div>
        </div>
     );
}
 
export default FlightTravelForm;