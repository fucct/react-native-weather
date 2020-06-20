import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function Weather({ state }) {
  const { temp, condition } = state;

  return (
    <View style={styles.container}>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons size={100} name={"weather-lightning-rainy"}/>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.weather}>지금 날씨 ㅅㅂ : {condition}</Text>
        <Text style={styles.temperature}>지금 온도 ㅅㅂ : {temp}</Text>
      </View>
    </View>
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
    backgroundColor: "skyblue"
  },
  temperature: {
    fontSize: 36,
  },
  weather: {
    fontSize: 36,
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});