import { View, Text, Dimensions, StatusBar, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const width = Dimensions.get("window").width;

export default function Clock() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [dimensions, setDimensions] = useState(width);

  useEffect(() => {
    const tick = () => {
      const date = new Date();
      setHour(hour);
      setMinute(date.getMinutes());
      setSecond(date.getSeconds());
    };
    tick();

    const interval = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log("hello sexy banana");
  }, [minute]);

  return (
    <View style={clock().container}>
      <Text style={time({ dimensions }).units}>{minute}</Text>
      <Text style={time({ dimensions, mb: true }).units}>{second}</Text>
    </View>
  );
}

const clock = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#0d0f14",
      justifyContent: "center",
      alignItems: "center",
    },
  });

const time = ({ dimensions, mb }) =>
  StyleSheet.create({
    units: {
      backgroundColor: "#151922",
      width: dimensions - 100,
      height: dimensions - 100,
      color: "#fff",
      fontSize: dimensions - 250,
      textAlign: "center",
      lineHeight: dimensions - 100,
      borderRadius: 10,
      marginBottom: mb ? 0 : 50,
    },
  });
