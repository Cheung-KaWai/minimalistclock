import { View, Text, Dimensions, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

const width = Dimensions.get("window").width;

export default function Clock() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [dimensions, setDimensions] = useState(width);

  useEffect(() => {
    const tick = () => {
      const date = new Date();
      setHour(date.getHours());
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

  return (
    <>
      <Text style={time({ dimensions }).units}>{hour}</Text>
      <Text style={time({ dimensions }).units}>{minute}</Text>
    </>
  );
}

const time = ({ dimensions }) =>
  StyleSheet.create({
    units: {
      backgroundColor: "#151922",
      width: dimensions - 150,
      height: dimensions - 150,
      color: "#fff",
      fontSize: dimensions - 250,
      textAlign: "center",
      lineHeight: dimensions - 150,
      borderRadius: 10,
      marginBottom: 30,
    },
  });
