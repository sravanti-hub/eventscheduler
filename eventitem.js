import React from 'react';
const eventitem=({event})=>{
    <div>
        <h3>{event.title}</h3>
        <p>Date:{new Date(event.date).toLocaledatestring()}</p>
        <p>Time:{event.time}</p>
        <p>Location:{event.location}</p>
        <p>Description:{event.description}</p>
        </div>
}
export default eventitem;
