import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
export default class Services extends Component {
state = {
    services : [
        {
            icon:<FaCocktail />,
            title:'Free cocktails',
            info:'hey there am testing this using a dummy text..Dont take it seriously',
            
        },
        {
            icon:<FaHiking />,
            title:'Endless Hikins',
            info:'hey there am testing this using a dummy text..Dont take it seriously',
            
        },
        {
            icon:<FaShuttleVan />,
            title:'Free shuttle',
            info:'hey there am testing this using a dummy text..Dont take it seriously',
            
        },
        {
            icon:<FaBeer/>,
            title:'Strongest Beer',
            info:'hey there am testing this using a dummy text..Dont take it seriously',
            
        }
    ]
}
  render() {
    return (
      <section className="services">
          <Title title="services" />
          <div className="services-center">
          {
              this.state.services.map((item,index) => {
                  return <article key={index} className="service">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                  </article>
              })
          }
          </div>
      </section>
    )
  }
}
