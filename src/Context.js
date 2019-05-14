import React, { Component } from 'react';
import Client from './Contentful';
// Client.getEntries({
//   content_type:"beachResortRoom",
//   //order:'sys.createdAt',
//   //the price is in the fields and then price... when doing reverse order just add the neg sign before
//   //visit documentation for more
//   order:"fields.price"
// })
// .then( response => console.log(response.items))
// .catch(err => console.log(err))
const RoomContext =  React.createContext();
// the access are the provider and the consumer


export default class RoomProvider extends Component {
  state = {
     rooms : [],
     sortedRooms : [],
     featuredRooms : [],
     loading:false,
     type:'all',
     capacity:1,
     price:0,
     minPrice:0,
     maxPrice:0,
     minSize:0,
     maxSize:0,
     breakfast:false,
     pets:false
  }

  //get data
  //we use await when handling async code
  //when you are using async you just embed it before the parenthesis
  //an async function must always have an await
 
  getData = async ()=>{
    try{
       let response = await Client.getEntries({content_type:'resortHotel'});
       //set the data
       let rooms = this.formatData(response.items);
       let featuredRooms = rooms.filter(room => room.featured === true);
       let maxPrice = Math.max(...rooms.map(item => item.price));
       let maxSize = Math.max(...rooms.map(item => item.size));
       this.setState({
          rooms,
          featuredRooms, sortedRooms:rooms,loading:false,
          price:maxPrice,
          maxPrice,
          maxSize

        })
     }catch(err){
       console.log(err)
     }
    }

  //loading shall matter when we are loading the data
  //we are going to use lifecycle mthds



  componentDidMount(){
      
  }

formatData = (items) =>{
  let tempItems = items.map(item => {
      //do all the formatting and the destructuring
      let id = item.sys.id
      let images = item.fields.images.map(image => image.fields.file.url );
      //we are overwriting
      let room = {...item.fields,images,id}
      return room;
  })
  return tempItems;
}
 text = 'the text matters'
//have a getRoom function
getRoom = (slug) => {
  //get the specific room
  let tempRooms = [...this.state.rooms];
  const room = tempRooms.find(room =>(
      room.slug === slug))
  return room;
};

handleChange = event => {
  //remember that event is usually an object
  //the func shall grab everything and fix in state
  //the following shall handle a form
  const target = event.target;
  const value = target.type === "checkbox" ? target.checked : target.value;
  const name = target.name;
  
 
  
  this.setState({
    [name]:value
  },this.filterRooms
  )

}
//the following func shall perform everything concerning the rooms
filterRooms = () => {

  let { rooms,type,capacity,price,minSize,maxSize,
  breakfast,pets } = this.state
  //all the rooms
  let tempRooms = [...rooms];
  //transform the capacity 
  capacity = parseInt(capacity);//convert from string to num

  //filter by type
  if(type !== 'all')
  {
    //only the room that match the type
    tempRooms = tempRooms.filter(room => room.type === type)
  }


  //filter by capacity
  //only the rooms that can support the num or greater than
  if(capacity !== 1 ){
    tempRooms = tempRooms.filter(room=>room.capacity >= capacity)
    
  }

  //filter by price
  tempRooms = tempRooms.filter(room => room.price < price);

 //filter by size

 tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)
 
 //filter by breakfast
 if(breakfast)
 {
   tempRooms = tempRooms.filter(room => room.breakfast === true)
 }

 //filter by pets
 if(pets)
 {
   tempRooms = tempRooms.filter(room => room.pets === true)
 }

  this.setState({
    sortedRooms : tempRooms
  })
  
}


  render() {
    return (
      //changes in the context
      //here you just pass the state
      <RoomContext.Provider value={{ ...this.state,getRoom:this.getRoom,handleChange:this.handleChange }}>
      {this.props.children}
      </RoomContext.Provider>
    )
  }
}
 
//create a consumer
const RoomConsumer = RoomContext.Consumer;

//the export functionality..a high order component

export function withRoomConsumer(Component){
  return function ConsumerWrapper(props){
    return (
    <RoomConsumer>
      {value => <Component {...props} context={value}></Component>}
    </RoomConsumer>
    )
  }
}



//due to different needs
export{RoomProvider,RoomConsumer,RoomContext};
