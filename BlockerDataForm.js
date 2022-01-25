import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import UploadImage from "../Uploads/UploadImage";
import mime from "mime";
import axios from "axios";

export default function BlockerDataForm() {
  const [dataState, updateState] = useState("");

  const handler = (data) => {
    updateState(data);
  };

  console.log({ dataState });
  const formik = useFormik({
    initialValues: {
      foto: "",
    },
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,

    onSubmit: async () => {
      console.log({ dataState });

      let formData = new FormData();

      formData.append("file", {
        uri:
          Platform.OS === "android"
            ? dataState.image
            : dataState.image.replace("file://", ""),
        name: dataState.image.split("/").pop(),
        type: mime.getType(dataState.image),
      });

      //const url = "https://pasteblock.herokuapp.com/api/blocker/form/8";
      const url = "http://localhost:8080/api/blocker/form/8";
      console.log("aaaaaaaaa");
      console.log(url);
      console.log("aaaaaaaaaaa");

      try {
        /*const response = await fetch(
          url,
          {
            method: "POST",
            body: formData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );*/

        const response = await axios.post(url, formData);
        const result = await response.json();
        console.log(result);
        return result;
      } catch (error) {
        throw error;
      }
    },
  });
  return (
    <View style={{ backgroundColor: "blue", height: "100%" }}>
      <Text style={styles.title}>Registro</Text>
      <UploadImage someHandlerProp={handler} />

      <Button
        title="Registrarse"
        onPress={formik.handleSubmit}
        backgroundColor="white"
        textColor="blue"
      />
    </View>
  );
}

function validationSchema() {
  return {};
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 45,
    marginBottom: 15,
    color: "white",
  },
  input: {
    height: 40,
    marginBottom: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "white",
    width: "80%",
    alignSelf: "center",
    color: "black",
  },
  text: {
    textAlign: "center",
    color: "white",
  },
  error: {
    textAlign: "center",
    marginTop: 10,
    color: "#f00",
  },
});
