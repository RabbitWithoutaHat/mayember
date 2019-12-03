import React, { Component } from 'react';
import './style.scss'
import CityInput from '../../components/CityInput/CityInput';
import TempRange from '../../components/TempRange/TempRange';
import  CityCard  from '../../components/CityCard/CityCard'
import {connect} from "react-redux";

 class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard__input-wrapper">
          <div className="dashboard__city-input">
            <CityInput  />
          </div>
          <div className="dashboard__temp-range">
          <TempRange />
          </div>
        </div>
        <div className="dashboard__city-list">
        {this.props.dashboardCityList.map(el =>
        el.main.temp >= this.props.temp ? <CityCard weather={el}></CityCard> : null
              )}
        </div>

      </div>
    );
  }
}


function mapStateToProps(state) {
  console.log(state);

  return {
    dashboardCityList: state ? state.dashboardCityList : 'card',
    temp: state.temp
  };
}

export default connect(
  mapStateToProps,
)(Dashboard);
