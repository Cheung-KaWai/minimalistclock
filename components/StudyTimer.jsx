import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useState, useEffect } from "react";

const width = Dimensions.get("window").width;

export default function StudyTimer() {
  const [value, setValue] = useState(60);
  const [dimensions, setDimensions] = useState(width);
  const [start, setStart] = useState(false);

  let tick;

  const handleStudying = () => {
    if (start) clearInterval(tick);
    setStart((prev) => !prev);
  };

  useEffect(() => {
    if (start) {
      tick = setInterval(() => {
        setValue((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      clearInterval(tick);
    };
  }, [start, value]);

  useEffect(() => {
    if (value <= 0 && start) {
      setStart(false);
      setValue(60);
      clearInterval(tick);
    }
  }, [value]);

  return (
    <View>
      <TextInput
        keyboardType="numeric"
        style={style({ dimensions }).input}
        maxLength={2}
        onChangeText={(value) => setValue(value)}
        editable={!start}
      >
        {value}
      </TextInput>
      <TouchableOpacity
        style={style({ dimensions }).button}
        activeOpacity={0.9}
        onPress={handleStudying}
      >
        <Text style={button.buttonText}>
          {start ? "Pause" : "Start studying"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const style = ({ dimensions }) =>
  StyleSheet.create({
    input: {
      color: "#fff",
      backgroundColor: "#151922",
      width: dimensions - 150,
      height: dimensions - 150,
      textAlign: "center",
      fontSize: dimensions - 250,
      borderRadius: 10,
    },
    button: {
      backgroundColor: "#151922",
      height: 50,
      borderRadius: 5,
      marginTop: 50,
    },
  });

const button = StyleSheet.create({
  buttonText: {
    lineHeight: 50,
    textAlign: "center",
    fontSize: 18,
    color: "#868e96",
  },
});
