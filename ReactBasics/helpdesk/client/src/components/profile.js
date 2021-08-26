import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { getTickets } from './UserFunctions';

function Profile() {

    const [listOfTickets, setListOfTickets] = useState([]);

    

    useEffect(() => {
        axios.get("http://localhost:3001/tickets").then((response) => {
            setListOfTickets(response.data);
        })
    }, []);

    return <div className="ticketContainer">
        {listOfTickets.map((value, key) => 
        { 
            return <div className="ticket">
            <div className="title">{value.title}</div>
            <div className="description">{value.description}</div>
            <div className="footer">{value.email}</div>
            <div className="footer">{value.company}</div>
            <div className="footer">{value.createdAt}</div>
            </div>;
        })}
    </div>
}

export default Profile;