import React from 'react';
import Room from './Rooms';
//we are passing the sorted rooms here
export default function RoomsList({rooms}) {
    if(rooms.length === 0){
        return (
            <div className="empty-serach">
            <h3>unfortunately no rooms matched your search parameter</h3>
            </div>

        )
    }
    return (
        <section className="roomslist">
        <div className="roomslist-center">
        { 
            rooms.map(item => {
                return <Room key={item.id} room={item}/>
            })
        }
        </div>
        </section>
    )
  
}
