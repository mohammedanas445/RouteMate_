import React from "react";
import { useState, useEffect } from "react";
import FlightTravelForm from "./TravelForm_flight";
import TrainTravelForm from "./TravelForm_train";

import './Home.css'

const Home = () => {
    const [selectedForm, setSelectedForm] = useState("Flight");
    const handleFormChange = (formName) => {
        setSelectedForm(formName);
    };

    
    const renderForm = () => {
        switch (selectedForm) {
            case "Flight":
                return <FlightTravelForm />;
            case "Train":
                return <TrainTravelForm />;
            // case "Bus":
            //     return <BusTravelForm />;
            default:
                return null;
        }
    };

    
    return ( 
        <div className="main">
            <nav className="tabs">
                <button onClick={() => {
                    handleFormChange("Flight")
                    }}
                    style={{
                        backgroundColor: selectedForm === "Flight" ? "#007bff" : "white",
                        color: selectedForm === "Flight" ? "white" : "rgba(56, 93, 225, 1)",
                    }}
                >Flight</button>
                <button onClick={() => {
                    handleFormChange("Train")
                    }}
                    style={{
                        backgroundColor: selectedForm === "Train" ? "#007bff" : "white",
                        color: selectedForm === "Train" ? "white" : "rgba(56, 93, 225, 1)",
                    }}
                >Train</button>
                <button onClick="/">Bus</button>
            </nav>
            {renderForm()}
        </div>
     );
}
 
export default Home;