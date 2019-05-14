import React, { Component } from 'react';
import {RoomContext} from '../Context';
import Room from './Rooms';
import Loading from './Loading';
import Title from './Title';

class FeaturedRooms extends Component {
    static contextType = RoomContext;//this must be present for working with context
  render() {
    //the following destructures featuredRooms and assigns to context
    
      let { loading,featuredRooms : rooms } = this.context;
    console.log(`the context `,this.context)
    console.log(`the featured rooms are `,rooms)
      rooms = rooms.map( room => {
          return <Room key={room.id} room={room}/>
      })
      //we shall check inside if loading is true
    return (
      <section className="featured-rooms">
          <Title title="featured-rooms"/>
          <div className="featured-rooms-center">
              { loading ? <Loading /> : rooms} 
          </div>
          
      </section>
    )
  }
}

export default FeaturedRooms
