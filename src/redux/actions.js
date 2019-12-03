import { ADD_WEATHER, ADD_CITY, FETCHED_WEATHER, REQUESTED_WEATHER_FAILED, ADD_TEMP, DELETE_CITY } from './types';
import { put, call, takeEvery, select } from 'redux-saga/effects';

const requestWeatherSuccessAC = (data, city) => {
  return {
    type: ADD_WEATHER,
    data: data,
    city: city
  };
};

const requestWeatherErrorAC = () => {
  return {
    type: REQUESTED_WEATHER_FAILED
  };
};

const fetchWeatherAC = () => {
  return {
    type: FETCHED_WEATHER,
  };
};

const cityValueToStoreAC = (city) => {
  return {
    type: ADD_CITY,
    data: city
  };
};
const setTempFilterAC = (temp) => {
  return {
    type: ADD_TEMP,
    temp: temp
  };
};
const deleteCityAC = (city) => {
  return {
    type: DELETE_CITY,
    city: city
  };
};

function* watchFetchWeather() {
  yield takeEvery(FETCHED_WEATHER, getWeatherAC);
}

function* getWeatherAC() {
  try {
    const state = yield select()
    console.log(state.inputCity);
    const data = yield call(() => fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${state.inputCity}&APPID=YOUR_WEATHER_APIKEY&units=metric`));
    const json = yield call(() => data.json());
    console.log(json.list[0]);

    yield put(requestWeatherSuccessAC(json.list[0], state.inputCity));
  } catch (error) {
    yield put(requestWeatherErrorAC());
  }
}

export { getWeatherAC, watchFetchWeather, fetchWeatherAC, cityValueToStoreAC, setTempFilterAC, deleteCityAC };
