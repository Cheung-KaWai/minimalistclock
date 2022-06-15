import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Menu from "./MenuItems/Menu";

export default function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(true);

  const handleScreenPress = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <TouchableOpacity
      style={layout.container}
      onPress={handleScreenPress}
      activeOpacity={1}
    >
      {children}
      <Menu showMenu={showMenu} />
    </TouchableOpacity>
  );
}

const layout = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0f14",
    justifyContent: "center",
    alignItems: "center",
  },
});
