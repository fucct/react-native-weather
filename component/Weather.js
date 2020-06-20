import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  ThunderStorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#485563", "#29323c"],
    title: "Be careful about thunder",
    subtitle: "keep in your mind",
  },
  Drizzle: {
    iconName: "weather-lightning-hail",
    gradient: ["#b993d6", "#8ca6db"],
    title: "Happy Drizzle",
    subtitle: "little bit humid",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#4b6cb7", "#182848"],
    title: "Check your umbrella",
    subtitle: "keep in your mind",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#00d2ff", "#3a7bd5"],
    title: "Happy Christmas",
    subtitle: "White Christmas",
  },
  Atmosphere: {
    iconName: "weather-partly-cloudy",
    gradient: ["#ed4264", "#ffedbc"],
    title: "??",
    subtitle: "What is an atmosphere?",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "Happy day",
    subtitle: "What a good weather",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#73C8A9", "#373B44"],
    title: "Gloomy Sunday",
    subtitle: "So sad",
  },
}
export function Weather({ state }) {
  const { temp, condition } = state;

  return (
      <LinearGradient colors={weatherOptions[condition].gradient} style={styles.gradient}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.halfContainer}>
          <MaterialCommunityIcons size={100} name={weatherOptions[condition].iconName} color={"white"}/>
          <Text style={styles.temperature}>{Math.floor(temp)}ºC</Text>
        </View>
        <View style={{...styles.halfContainer, ...styles.textContainer}}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
      </LinearGradient>
  );
}

Weather.propTypes = {
  state: PropTypes.shape({
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds"]).isRequired
  }),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  temperature: {
    fontSize: 32,
    color: "black",
  },
  weather: {
    fontSize: 32,
    color: "black",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gradient:{
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  title:{
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle:{
    fontWeight: "600",
    color: "white",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems:"flex-start"
  },
});