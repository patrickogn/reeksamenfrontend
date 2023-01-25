import React, {useState} from 'react';
import apiFacade from "../apiFacade.js";

function Side4({setErrorMessage}) {
    
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [duration, setDuration] = useState('');
    const [packinglist, setPackinglist] = useState('');
    const [createTrip, setTrip] = useState(false)

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleDate = (e) => {
        setDate(e.target.value);
    };

    const handleTime = (e) => {
        setTime(e.target.value);
    };

    const handleLocation = (e) => {
        setLocation(e.target.value);
    };

    const handleDuration = (e) => {
        setDuration(e.target.value);
    };

    const handlePackinglist = (e) => {
        setPackinglist(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let jsonBody =
            {
                name: name,
                date: date,
                time: time,
                location: location,
                duration: duration,
                packinglist: packinglist
            }
        console.log(jsonBody)
        await apiFacade.postData("admin/createtrip", (data) => {
            console.log("Trip in: " + data.location + " was successfully created");
        }, setErrorMessage, jsonBody)
        setTrip(!createTrip)
    }

    return (
        <div style={{padding: 30}} className="column middle" style2={{paddingLeft: 40}}>
            <div style={{paddingTop: 10}}>
                <h2>Create new Trip</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <input className="inputLogin" required type="text" placeholder="Name" name="name"
                       onChange={handleName}/>
                <br/>
                <input className="inputLogin" required type="text" placeholder="Date" name="date"
                       onChange={handleDate}/>
                <br/>
                <input className="inputLogin" required type="text" placeholder="Time" name="time"
                       onChange={handleTime}/>
                <br/>
                <input className="inputLogin" required type="text" placeholder="Location" name="location"
                       onChange={handleLocation}/>
                <br/>
                <input className="inputLogin" required type="text" placeholder="Duration" name="duration"
                       onChange={handleDuration}/>
                <br/>
                <input className="inputLogin" required type="text" placeholder="Packinglist" name="packinglist"
                       onChange={handlePackinglist}/>
                <br/><br/>
                <button onClick={handleSubmit} type="submit">Create Trip</button>
            </form>
            <div>
                {createTrip ? (
                    <h5>Trip in {location} was successfully created</h5>
                ) : ""}
            </div>
        </div>
    );
}

export default Side4
