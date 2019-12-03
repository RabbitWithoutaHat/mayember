import { ADD_WEATHER, ADD_CITY, ADD_TEMP, DELETE_CITY } from './types';

const initialState = {
  dashboardCityList: [],
  inputCity: '',
  temp: -20
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_WEATHER: {
      return {
        ...state,
        dashboardCityList: [...state.dashboardCityList, { ...action.data, city: action.city }],
      };
    }
    case ADD_CITY: {
      return {
        ...state,
        inputCity: action.data,
      };
    }
    case ADD_TEMP: {
      return {
        ...state,
        temp: action.temp,
      };
    }
    case DELETE_CITY: {
      console.log(action.city);

      return {
        ...state,
        dashboardCityList: state.dashboardCityList.filter(city => city.city !== action.city),
      };
    }

    default:
      return state;
  }
}
