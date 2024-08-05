import React,{useState,useEffect}from 'react'
import axios from 'axios';
import eventitem from './eventitem';
const eventlist=()=>{
    const[events,setevents]=useState([]);
    const fetchAllEvents=async()=>{
        const response=await axios.get("http://localhost:4050/api/events");
        setevents(response.data.data)
    }
    console.log("my events",events)
    useEffect(()=>{
        fetchAllEvents();

    },[])
    return(
        <div>
            <h2>Events</h2>
            {
                events.map((event)=>{
                    <eventitem key={event._id}event={event}/>
                })
            }
        </div>
    )
}
export default eventlist;
