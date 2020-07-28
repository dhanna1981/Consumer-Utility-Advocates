import React, { Component } from "react";
import { FaBroadcastTower, FaRecycle, FaDollarSign, FaSmileWink } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaBroadcastTower />,
        title: "Lowest Rates Available",
        info:
          "Shop our suppliers and find the lowest rates with the best value today!"
      },
      {
        icon: <FaRecycle />,
        title: "Go Green!",
        info:
          "100% Renewable Energy Rates are available!  Choose a plan today."
      },
      {
        icon: <FaDollarSign />,
        title: "Secure Rate Plans Available",
        info:
          "Know exactly how much you are paying per KWH all of the time!  Chose one of our secure rate plans today!"
      },
      {
        icon: <FaSmileWink />,
        title: "Have Questions??",
        info:
          "Contact one of our Energy Specialists today!"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
