import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Dimensions } from "react-native";
import Timer from "./Timer";
import SettingIcon from "./Settings";
import Pomodoro from "./Pomodoro";
import Sound from "./Sound";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("window").width;

export default function Menu({ showMenu }) {
  const [dimensions, setDimensions] = useState(width);

  const hitSlop = { top: 15, bottom: 15, left: 15, right: 15 };
  const navigation = useNavigation();

  return (
    <View style={menu({ dimensions, showMenu }).container}>
      <TouchableOpacity
        style={menuItem.item}
        onPress={() => navigation.navigate("Home")}
        hitSlop={hitSlop}
      >
        <Timer />
      </TouchableOpacity>
      <TouchableOpacity
        style={menuItem.item}
        onPress={() => navigation.navigate("Study")}
        hitSlop={hitSlop}
      >
        <Pomodoro />
      </TouchableOpacity>
      <TouchableOpacity
        style={menuItem.item}
        onPress={() => console.log("3")}
        hitSlop={hitSlop}
      >
        <Sound />
      </TouchableOpacity>
      <TouchableOpacity
        style={menuItem.item}
        onPress={() => console.log("4")}
        hitSlop={hitSlop}
      >
        <SettingIcon />
      </TouchableOpacity>
    </View>
  );
}

const menu = ({ dimensions, showMenu }) =>
  StyleSheet.create({
    container: {
      width: dimensions - 150,
      height: 30,
      flexDirection: "row",
      justifyContent: "space-between",
      opacity: showMenu ? 1 : 0,
      position: "absolute",
      left: "50%",
      bottom: 50,
      transform: [{ translateX: -(dimensions - 150) / 2 }],
    },
  });

const menuItem = StyleSheet.create({
  item: {
    height: 30,
    width: 30,
  },
});
