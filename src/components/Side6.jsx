import React, {useEffect, useState} from 'react';
import facade from "../apiFacade.js";
import apiFacade from "../apiFacade.js";

function Side6({setErrorMessage}) {

    const [allTrips, setAllTrips] = useState([])
    const [tripId, setTripId] = useState(0)
    const [removed, setRemoved] = useState(false)

    useEffect(() => {
        facade.fetchData("trip/all", data => setAllTrips(data), setErrorMessage);
    }, [])

    const tripChange = (e) => {
        setTripId(e.target.value)
        console.log(tripId);
    }

    const removeTrip = async (e) => {
        e.preventDefault();
        let jsonBody = {
            id: tripId
        }

        console.log(jsonBody)
        await apiFacade.deleteData("admin/deletetrip/" + tripId, (data) => {
            console.log("Trip with id: " + tripId + "was successfully removed");
        }, setErrorMessage, jsonBody)
        setRemoved(!removed)
    };


    return (
        <div style={{padding: 30}} className='column middle'>
            <label htmlFor="boatSelect">Choose a Trip:</label>
            <select onChange={tripChange}>
                <option value=""></option>
                {allTrips.map((trip) => (
                    <option  key={trip.id} value={trip.id}>id:{trip.id} | Name:{trip.name} | Date:{trip.date}</option>
                ))}
            </select>


            <button className="removeTrip" onClick={removeTrip}>Remove Trip</button>

            {removed ? (
                <h5>Trip with id {tripId} was succesfully removed</h5>
            ) : ""}
        </div>
    );
}

export default Side6;