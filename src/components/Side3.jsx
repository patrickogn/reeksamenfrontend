import React, {useEffect, useState} from 'react';
import facade from "../apiFacade.js";


function Side1({setErrorMessage}) {

  const [allTrips, setAllTrips] = useState([]);
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    facade.fetchData("trip/all", data=> setAllTrips(data), setErrorMessage);
}, [])

const assignToTrip = (e) => {
  setToggle(!toggle)
}

const handleSubmit = async (e) => {
  e.preventDefault();
  let jsonBody =
      {
          bruger_idbruger: id,
          trip_idtrip: idtrip
      }
  console.log(jsonBody)
  await apiFacade.postData("assignment", (data) => {
      console.log("User : " + bruger_idbruger.id + " " + trip_idtrip.idtrip + " was successfully created");
  }, setErrorMessage, jsonBody)

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
                <td><button className="logout" value={dinner.id} onClick={assignToTrip}>Assign to event</button></td>


            </tr>
        ))}
        </tbody>
    </table>

    {toggle ? (
                <form onSubmit={handleSubmit}>
                    <input className="inputLogin" required type="text" placeholder="Family name"
                           onChange={handleFamily}/>
                    <br/>
                    <input className="inputLogin" required type="text" placeholder="Contact info" name="time"
                           onChange={handleContact}/>
                    <br/><br/>
                    <button onClick={handleSubmit} type="submit">Save</button>
                </form>
            ) : ""}

</div>
  );
}

export default Side1

