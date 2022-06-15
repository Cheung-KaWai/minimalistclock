import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Menu from "./MenuItems/Menu";

const width = Dimensions.get("window").width;

export default function Clock() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [dimensions, setDimensions] = useState(width);
  const [showMenu, setShowMenu] = useState(true);

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

  const handleScreenPress = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <TouchableOpacity
      style={clock().container}
      onPress={handleScreenPress}
      activeOpacity={1}
    >
      <Text style={time({ dimensions }).units}>{minute}</Text>
      <Text style={time({ dimensions }).units}>{second}</Text>
      <Menu showMenu={showMenu} />
    </TouchableOpacity>
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
