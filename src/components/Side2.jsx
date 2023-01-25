import React, {useEffect, useState} from 'react';
import facade from "../apiFacade.js";

function Side2({setErrorMessage}) {
    const [allTrips, setAllTrips] = useState([]);
    const [selectedTripGuides, setSelectedTripGuides] = useState([]);
    const [selectedTripId, setSelectedTripId] = useState(null);

    useEffect(() => {
      facade.fetchData("trip/all", data=> setAllTrips(data), setErrorMessage);
    }, [])
    
    const showGuides = (tripId) => {
      setSelectedTripId(tripId);
      const selectedTrip = allTrips.find(trip => trip.id === tripId);
      setSelectedTripGuides(selectedTrip.guides);
    }
    
    return (
      <div style={{padding: 30}} className='column middle'>
        <h2>Trip List</h2>
        <br/>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Trip</th>
                <th scope="col">TripId</th>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Location</th>
                <th scope="col">Duration</th>
                <th scope="col">Packinglist</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {allTrips.map((trip, i) =>(
                <tr key={trip.id}>
                    <th scope="row" >{i+1}</th>
                    <td>{trip.id}</td>
                    <td>{trip.name}</td>
                    <td>{trip.date}</td>
                    <td>{trip.time}</td>
                    <td>{trip.location}</td>
                    <td>{trip.duration}</td>
                    <td>{trip.packinglist}</td>
                    <td><button className="logout" onClick={() => showGuides(trip.id)}>See guides</button></td>
                </tr>
            ))}
            </tbody>
        </table>
        {selectedTripGuides.length > 0 && (
          <div>
            <h3>Guides for trip {selectedTripId}</h3>
            <ul>
              {selectedTripGuides.map(guide => (
                <li key={guide.id}>
                <p>Name: {guide.name}</p>
                <p>Gender: {guide.gender}</p>
                <p>Birthyear: {guide.birthyear}</p>
                <p>Profile: {guide.profile}</p>
                <p>Imageurl: {guide.imageurl}</p>
              </li>
                
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
  export default Side2
  