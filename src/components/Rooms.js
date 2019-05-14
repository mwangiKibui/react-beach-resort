import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
import PropTypes from 'prop-types'
//defaultImg shall act as a backup
export default function Room({room}) {
    console.log(room);
    const { name,slug,images,price } = room;
  return (
    <article className="room">
      <div className="img-container">
      <img src={images[0] || defaultImg } alt="single room" />
      <div className="price-top">
      <h6>${price}</h6>
      <p>per night</p>
      </div>
      <Link to={`/rooms/${slug}`} className="btn-primary room-link">Features</Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  )
}

//below here we are accessing the propTypes
//then we go inside the object to the PropTypes to shape i.e to validate them
Room.propTypes = {
    room:PropTypes.shape({//we shape objects
        name:PropTypes.string.isRequired,//it is of type string and shall b required
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,//an array of strings
        price:PropTypes.number.isRequired
    })
}
