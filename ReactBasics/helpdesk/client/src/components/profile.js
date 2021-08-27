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

    return <div className="ticket-container">

        <table>
            <thead>
                <tr>
                    <th>Ticket Number</th>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {listOfTickets.map((value, key)=> 
                    <tr>
                        <td>{value.title}</td>
                        <td>{value.description}</td>
                        <td>{value.email}</td>
                        <td>{value.company}</td>
                        <td>{value.createdAt}</td>
                    </tr>
                )}
            </tbody>
        </table>

        {/* {listOfTickets.map((value, key) => 
        { 
            return <div className="ticket">
            <div className="title">{value.title}</div>
            <div className="description">{value.description}</div>
            <div className="footer">{value.email}</div>
            <div className="footer">{value.company}</div>
            <div className="footer">{value.createdAt}</div>
            </div>;
        })} */}


    </div>
}

export default Profile;