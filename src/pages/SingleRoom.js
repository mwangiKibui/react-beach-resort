
/**
 * with es6 react redux and graphql extension you can be able to do the following
 * rafc for an arrow func 
 * rfc for a normal func
 * rce for a class
 */

import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
//import Hero from '../components/Hero';
import Banner from'../components/Banner';
import { Link } from 'react-router-dom';
import {RoomContext} from '../Context';//accessing the context
import StyledHero from '../components/StyledHero';
class SingleRoom extends Component {
  constructor(props){
    super(props);
    this.state = {
      slug:this.props.match.params.slug,// shall be unique
      defaultBcg
    };
  };
  //componentDidMount(){} whenever it is to be executed
  static contextType = RoomContext;
  render() {
  //get the getRoom function
  const { getRoom } = this.context;
  const room = getRoom(this.state.slug);
  if(!room)
  {
    return(
    <div className="error">
    <h3>no such room could be found</h3>
    <Link to="/rooms" className="btn-primary"> Back to rooms </Link>
    </div>
    )
  }
  //destructure the object
  const { name,description,capacity,size,price,extras,breakfast,pets,images } = room;
  //do a destructure
  //by using 
  const [mainImg,...defaultImg] = images;
    return (
      <React.Fragment>
      <StyledHero img={mainImg}>
      <Banner title={`${name} room`}>
      <Link to="/rooms" className="btn-primary">back to rooms</Link>
      </Banner>
      </StyledHero>
      <section>
        <div className="single-room-images">
        {defaultImg.map( (item,index) => {
          return <img key={index} src={item} alt={name} />
        })}
        </div>
        <div className="single-room-info">
        <article className="desc">
        <h3>details</h3>
        <p>{description}</p>
        </article>
        <article className="info">
        <h3>info</h3>
        <h6>price : {price} </h6>
        <h6>size : ${size} SQFT </h6>
        <h6>max capacity : {capacity > 1 ? `${capacity} people` : `${capacity}  person`} </h6>
        <h6>{pets ? "pests are allowed" : "no pests allowed"}</h6>
        <h6>{breakfast && "free breakfast allowed"}</h6>
        </article>
        </div>
      </section>
      <section className="room-extras">
      <h6>extras</h6>
      <ul className="extras">
      {
        extras.map( (item,index) => {
            return <li key={index} className=""> - {item}</li>
        })
      }
      </ul>
      </section>
      </React.Fragment>
    )}
}
export default SingleRoom