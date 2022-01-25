import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 20,
  },
});
