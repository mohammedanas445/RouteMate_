import React, { useState, useEffect} from "react";
import data2 from "./stations2.json";
import Select from 'react-select'


const TrainTravelForm = () => {
    // const [fromCityName, setFromCityName] = useState("");
    // const [toCityName, setToCityName] = useState("");
    const [departureDate, setDepartureDate] = useState("");

    // const handleFromCityChange = (e) => {
    //     setFromCityName(e.target.value);
    // };

    // const handleToCityChange = (e) => {
    //     setToCityName(e.target.value);
    // };

    const handleDateChange = (e) => {
        setDepartureDate(e.target.value);
    };

    const [type, setType] = React.useState(0);

  if (type === 1) {
    document.querySelector("#train").classList.add("visible");
    document.querySelector("#plane").classList.remove("visible");
    document.querySelector("#bus").classList.remove("visible");
  } else if (type === 2) {
    document.querySelector("#train").classList.remove("visible");
    document.querySelector("#plane").classList.add("visible");
    document.querySelector("#bus").classList.remove("visible");
  } else if (type === 3) {
    document.querySelector("#train").classList.remove("visible");
    document.querySelector("#plane").classList.remove("visible");
    document.querySelector("#bus").classList.add("visible");
  }

  const [train_options, setTrainOptions] = React.useState([]);

  React.useEffect(() => {
    setTrainOptions(
      data2.data.map((item) => ({
        label: `${item.name} ${item.code}`,
        value: item.code,
      }))
    );
  }, []);


    return ( 
        <div >
            <div className="form">
                <div className="fromTo">
                    <div className="fromCity">
                        <p>From:</p>
                        <label htmlFor="fromCityName">
                        <Select
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
                        />
                            <p id="stationName">Secunderabad(SC)</p>
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
                <button type="submit">Search</button>
            </div>
        </div>
     );
}
 
export default TrainTravelForm;