import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Loading } from './component/Loading';
import * as Location from "expo-location";
import axios from 'axios';
import { Weather } from './component/Weather';

const API_KEY = "3147da487cd903f92848f0c5f86f1eee";

const App = () => {
  const [state, setState] = useState({
    isLoading: true,
    temp: 0,
    condition: "Clear",
  });

  const getWeather = async (latitude, longitude) => {
    const { data: { main: { temp }, weather } } = await axios.post(
      "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + API_KEY + "&units=metric");
    setState({ isLoading: false, temp: temp, condition: weather[0].main });
  };

  useEffect(() => {
    const getPosition = async () => {
      try {
        await Location.requestPermissionsAsync();
        const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
        getWeather(latitude, longitude);
        setState({ isLoading: false, temp: state.temp, condition: state.condition });
      }
      catch (error) {
        Alert.alert("Can't find you.", "So sad");
      }
    };
    getPosition();
  }, []);
  return (
    state.isLoading ? <Loading/> : <Weather state={state}/>
  );
};

export default App;

