import React, { Component } from 'react'
import { setTempFilterAC } from '../../redux/actions'
import {connect} from "react-redux";
import './style.scss'

class TempRange extends Component {
  handleChange = e => {
    this.props.tempFilter(e.target.value)
  }
  render() {
    return (
      <div className="range-slider">
        <div className="range-slider__title">Где сейчас теплее, чем</div>
        <input className="range-slider__range" type="range" value={this.props.temp} min="-50" max="50"  onChange={this.handleChange}/>
        <span className="range-slider__value">{this.props.temp}</span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);

  return {
    temp: state.temp
  };
}

function mapDispatchToProps(dispatch) {
  return {
    tempFilter: (temp) => dispatch(setTempFilterAC(temp)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TempRange);
