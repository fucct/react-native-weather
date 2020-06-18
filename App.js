import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Loading } from './component/Loading';
import * as Location from "expo-location";
import axios from 'axios';

const API_KEY = "3147da487cd903f92848f0c5f86f1eee";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const getWeather = async (latitude, longitude) => {
    const response = await axios.post("http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid="+API_KEY);
    console.log(response);
  }

  useEffect(() => {
    const getPosition = async () => {
      try {
        await Location.requestPermissionsAsync();
        const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
        getWeather(latitude, longitude);
        setIsLoading(false);
      }
      catch (error) {
        Alert.alert("Can't find you.", "So sad");
      }
    };
    getPosition();
  }, []);

  return (
    isLoading ? <Loading/> : null
  );
};

export default App;

