import React, {useEffect, useState} from "react";
import facade from "../apiFacade.js";

function UserPage() {
    const [dataFromServer, setDataFromServer] = useState("Loading...")

    useEffect(() => { facade.fetchData("info/user", data=> setDataFromServer(data.msg), "");
    }, [])

    return (
        <div>
            <h3>{dataFromServer}</h3>
            <br/>
            <h4>Du kan bruge menuen til venstre</h4>
        </div>
    )

}

export default UserPage;