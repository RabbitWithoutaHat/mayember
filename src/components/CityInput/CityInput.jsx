import React, { Component } from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';
import {connect} from "react-redux";
import { fetchWeatherAC, cityValueToStoreAC } from '../../redux/actions'
import './style.scss'

class CityInput extends Component {
  state = {
    city: ''
  }
  onSubmit = () => {
    this.props.inputCity(this.state.city)
    this.props.addCity(this.state.city);
    this.setState({ city: '' });
  };
  handleChange = city => {
    this.setState({ city });
  };

  handleSelect = city => {
    this.setState({ city });
  };
  render() {
    return (
      <div
      className="city-input__input-wrapper">
      <PlacesAutocomplete
        value={this.state.city}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <>
            <input
              {...getInputProps({
                placeholder: `${this.state.city}`,
                className: 'city-input__input',
              })}
            />
            <button className="city-input__button" onClick={this.onSubmit}>+</button>
            <div className="city-input__dropdown-container">
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'city-input__suggestion-item--active'
                  : 'city-input__suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </PlacesAutocomplete>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCity: (city) => dispatch(fetchWeatherAC(city)),
    inputCity: (value) => dispatch(cityValueToStoreAC(value))
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(CityInput);
