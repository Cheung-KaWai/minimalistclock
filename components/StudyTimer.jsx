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
const intialTime = 3600;

export default function StudyTimer() {
  const [value, setValue] = useState(intialTime);
  const [dimensions, setDimensions] = useState(width);
  const [start, setStart] = useState(false);
  const [initialCountDown, setInitialCountDown] = useState(intialTime);
  const [completion, setCompletion] = useState(100);

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

    if (value <= 0 && start) {
      setStart(false);
      setValue(intialTime);
      setInitialCountDown(intialTime);
      clearInterval(tick);
    }

    setCompletion((value / initialCountDown) * 100);

    return () => {
      clearInterval(tick);
    };
  }, [start, value]);

  return (
    <View>
      <TextInput
        keyboardType="numeric"
        style={style({ dimensions }).input}
        maxLength={2}
        onChangeText={(value) => {
          setValue(value * 60);
          setInitialCountDown(value * 60);
        }}
        editable={!start}
      >
        {Math.trunc(value / 60)}
      </TextInput>
      <View style={progress({ dimensions }).container}>
        <View style={progress({ dimensions }).bar}>
          <View
            style={progress({ dimensions, completion }).barBackground}
          ></View>
        </View>
      </View>
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

const progress = ({ dimensions, completion }) =>
  StyleSheet.create({
    container: {
      width: dimensions - 150,
      position: "relative",
      marginTop: 20,
    },
    bar: {
      width: "100%",
      height: 10,
      backgroundColor: "#151922",
      borderRadius: 3,
    },
    barBackground: {
      width: `${completion}%`,
      height: 10,
      backgroundColor: "#fff",
      borderRadius: 3,
    },
  });
