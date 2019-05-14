    import React from 'react'
    import RoomsFilter from './RoomsFilter';
    import RoomsList from './RoomsList';
    import {withRoomConsumer} from '../Context';
    import Loading from './Loading'
    //we are using a high order component

    const RoomContainer = ({context}) => {
       const {loading,sortedRooms,rooms} = context;
       if(loading){
                return <Loading />
        }
        return (
                <>
                <RoomsFilter rooms={rooms}/>
                <RoomsList rooms={sortedRooms}/>
                </>
        )}
        export default withRoomConsumer(RoomContainer)
    // export default function RoomContainer() {
    //   return (
    //     <RoomsConsumer>
    //         {
    //             (value) => { //this value shall be received from the context
    //             const {loading,sortedRooms,rooms} = value;
    //                if(loading){
    //                    return <Loading />
    //                }
    //                 return (
    //                     <div>
    //                      <RoomsFilter rooms={rooms}/>
    //                      <RoomsList rooms={sortedRooms}/>
    //                      </div>
    //                 )
    //             }
    //         }
    //     </RoomsConsumer>
    //   )
    // }