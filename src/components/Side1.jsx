import React, {useEffect, useState} from 'react';
import facade from "../apiFacade.js";


function Side1({setErrorMessage}) {

  const [allTrips, setAllTrips] = useState([]);
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    facade.fetchData("trip/all", data=> setAllTrips(data), setErrorMessage);
}, [])

const assignToConference = (e) => {
  setToggle(!toggle)
}

  return (
    <div style={{padding: 30}} className='column middle'>
    <h2>Trip List</h2>

    <br/>

    <table className="table">
        <thead>
        <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Location</th>
            <th scope="col">Duration</th>
            <th scope="col">Packinglist</th>
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
            </tr>
        ))}
        </tbody>
    </table>
</div>
  );
}

export default Side1

