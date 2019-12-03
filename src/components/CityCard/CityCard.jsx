import React, { Component } from 'react'
import {connect} from "react-redux";
import { deleteCityAC } from '../../redux/actions'
import './style.scss';


class CityCard extends Component {
  deleteCity = event => {
    this.props.deleteCity(event.target.attributes[1].textContent)
  }
  render() {
    return (
      <div className="city-card">
        <div>
          <div>
            <div className="city-card__title-wrapper">
              <span className="city-card__title">{this.props.weather.city}</span>
              <span className="city-card__title-cross" value={this.props.weather.city} onClick={this.deleteCity}> &#x2A2F; </span>
            </div>
            <div className="city-card__temp">
              <img src={`http://openweathermap.org/img/wn/${this.props.weather.weather[0].icon}@2x.png`} alt="" />
              <div>{this.props.weather.main.temp} &deg;C</div>
            </div>
            <div>Ветер: {this.props.weather.wind.speed} м/с</div>
            <div>Давление: {this.props.weather.main.pressure} мм</div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteCity: (city) => dispatch(deleteCityAC(city)),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(CityCard);
