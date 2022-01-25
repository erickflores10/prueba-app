import React, { useState, useEffect, Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getAuthUserApi } from "../../api/User";
import useAuth from "../../hooks/useAuth";
import Button from "../Button";

export default function Home(props) {
  const [userAuthData, setUserAuthData] = useState({});
  const [nombre, setNombre] = useState("");
  const { userData } = useAuth();

  const { navigation } = props;

  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  useEffect(() => {
    (async () => {
      if (userData != undefined) {
        await loadUserData();
      }
    })();
  }, [userData, nombre]);

  const loadUserData = async () => {
    try {
      const response = await getAuthUserApi({ userData }.userData);
      setUserAuthData(response);
      setNombre({ userAuthData }.userAuthData.nombre);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text style={styles.title}>Hola {nombre}</Text>
      <View style={styles.menu}>
        <Button backgroundColor="blue" textColor="white" title="Solicitudes" />
        <Button backgroundColor="blue" textColor="white" title="Servicios" />
      </View>
      <Button backgroundColor="blue" textColor="white" title="Mi perfil" />
      <Button backgroundColor="blue" textColor="white" title="Editar perfil" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 100,
    color: "blue",
  },
  menu: {
    height: "50%",
    justifyContent: "center",
  },
});
