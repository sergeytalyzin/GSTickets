import React from "react";
import "./ticket.less";
import logo from  "../../img/logo.png"
import {formatTime} from "../../utils";
import {formatDate} from "../../utils";


const Ticket = ({flight}) => {
  const {price} = flight.flight
  const {segments} = flight.flight.legs[0]

  return (
      <div className="ticket">
        <div className="ticket__header">
          <img src={logo} alt="header-logo"/>
          <p className="ticket__price">{price.total.amount} Р</p>
        </div>
        <div className="ticket__main flight">
          {segments.map((it,i)=>{
            const arrivalDate = formatDate(it.arrivalDate)
            const departureDate = formatDate(it.departureDate)
            const time = formatTime(it.travelDuration)

            return (
              <div key={i} className="ticket__flight-info">
              <span className="ticket__departure">{it.departureCity.caption}, {it.departureAirport.caption}({it.departureAirport.uid})</span>&#8594;
              <span className="ticket__arrival">{it.arrivalCity.caption}, {it.arrivalAirport.caption}({it.departureAirport.uid})</span>
              <hr size="1"/>
              <div className="ticket__info">
                <p className="ticket__departure-data">

                  {departureDate}
                </p>
                <p className="ticket__flaying-time">
                  {time}
                </p>
                <p className="ticket__arrival-data">
                  {arrivalDate}
                </p>
              </div>
                <p className="ticket__airline-caption">Рейс выполняет: <span>{it.airline.caption}</span></p>
            </div>
            )
          })}
          <button className="ticket__button">выбрать</button>
        </div>
      </div>



  );
};


export default Ticket;
