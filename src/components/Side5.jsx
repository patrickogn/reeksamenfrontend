import React, {useState} from 'react';
import apiFacade from "../apiFacade.js";

function Side5({setErrorMessage}) {
    
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [birthyear, setBirthyear] = useState('');
    const [profile, setProfile] = useState('');
    const [imageurl, setImageurl] = useState('');
    const [createGuide, setGuide] = useState(false)
 

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleGender = (e) => {
        setGender(e.target.value);
    };

    const handleBirthyear = (e) => {
        setBirthyear(e.target.value);
    };

    const handleProfile = (e) => {
        setProfile(e.target.value);
    };

    const handleImageurl = (e) => {
        setImageurl(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let jsonBody =
            {
                name: name,
                gender: gender,
                birthyear: birthyear,
                profile: profile,
                imageurl: imageurl,
                
            }
        console.log(jsonBody)
        await apiFacade.postData("admin/createguide", (data) => {
            console.log("Guide with name: " + data.name + " was successfully created");
        }, setErrorMessage, jsonBody)
        setGuide(!createGuide)
    }

    return (
        <div style={{padding: 30}} className="column middle" style2={{paddingLeft: 40}}>
            <div style={{paddingTop: 10}}>
                <h2>Create new guide</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <input className="inputLogin" required type="text" placeholder="Name" name="name"
                       onChange={handleName}/>
                <br/>
                <input className="inputLogin" required type="text" placeholder="Gender" name="gender"
                       onChange={handleGender}/>
                <br/>
                <input className="inputLogin" required type="text" placeholder="Birthyear" name="birthyear"
                       onChange={handleBirthyear}/>
                <br/>
                <input className="inputLogin" required type="text" placeholder="Profile" name="profile"
                       onChange={handleProfile}/>
                <br/>
                <input className="inputLogin" required type="text" placeholder="Image Url" name="imageurl"
                       onChange={handleImageurl}/>
                <br/>
           
                <br/><br/>
                <button onClick={handleSubmit} type="submit">Create Guide</button>
            </form>
            <div>
                {createGuide ? (
                    <h5>Guide with name: {name} was successfully created</h5>
                ) : ""}
            </div>
        </div>
    );
}

export default Side5
