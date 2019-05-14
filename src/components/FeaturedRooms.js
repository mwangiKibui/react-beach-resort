import React, { Component } from 'react';
import {RoomContext} from '../Context';
import Room from './Rooms';
import Title from './Title';

class FeaturedRooms extends Component {
    static contextType = RoomContext;//this must be present for working with context
  render() {
    //the following destructures featuredRooms and assigns to context
    
      let { featuredRooms : rooms } = this.context;
      
      console.log(`the structure of the room is `,rooms)
      rooms = rooms.map( room => {
          return <Room key={room.id} room={room}/>
      })
      //we shall check inside if loading is true
    return (
      <section className="featured-rooms">
          <Title title="featured-rooms"/>
          <div className="featured-rooms-center">
              { rooms ? <p>there are rooms surely</p> : <p>there are no rooms currently</p>} 
          </div>
          
      </section>
    )
  }
}

export default FeaturedRooms
