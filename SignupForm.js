import React, { Fragment } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import useReg from "../../hooks/useReg";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../Button";

export default function SignupForm() {
  const { signUp } = useReg();
  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      celular: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,

    onSubmit: async () => {
      delete formik.values["passwordConfirmation"];

      const newUser = formik.values;
      console.log(JSON.stringify(newUser));
      const newBlocker = { usuario: newUser };
      console.log(JSON.stringify(newBlocker));
      try {
        const response = await fetch(
          "https://pasteblock.herokuapp.com/api/blocker/form",
          {
            method: "POST",
            body: JSON.stringify(newBlocker),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const result = await response.json();
        console.log(result);
        if (result.id != null) {
          signUp(result.id);
          console.log("hol");
          return result;
        }
      } catch (error) {
        throw error;
      }
    },
  });
  return (
    <View style={{ backgroundColor: "blue", height: "100%" }}>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        placeholder="Nombre"
        style={styles.input}
        value={formik.values.nombre}
        onChangeText={(text) => formik.setFieldValue("nombre", text)}
      />
      <TextInput
        placeholder="Apellidos"
        style={styles.input}
        value={formik.values.apellido}
        onChangeText={(text) => formik.setFieldValue("apellido", text)}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.email}
        onChangeText={(text) => formik.setFieldValue("email", text)}
      />
      <TextInput
        placeholder="Celular"
        style={styles.input}
        autoCapitalize="none"
        keyboardType="numeric"
        value={formik.values.celular}
        onChangeText={(text) => formik.setFieldValue("celular", text)}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <TextInput
        placeholder="Confirmar contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.passwordConfirmation}
        onChangeText={(text) =>
          formik.setFieldValue("passwordConfirmation", text)
        }
      />
      <Button
        title="Registrarse"
        onPress={formik.handleSubmit}
        backgroundColor="white"
        textColor="blue"
      />
      {formik.errors.nombre ? (
        <Text style={styles.error}>{formik.errors.nombre}</Text>
      ) : (
        <Fragment></Fragment>
      )}
      {formik.errors.apellido ? (
        <Text style={styles.error}>{formik.errors.apellido}</Text>
      ) : (
        <Fragment></Fragment>
      )}
      {formik.errors.email ? (
        <Text style={styles.error}>{formik.errors.email}</Text>
      ) : (
        <Fragment></Fragment>
      )}
      {formik.errors.celular ? (
        <Text style={styles.error}>{formik.errors.celular}</Text>
      ) : (
        <Fragment></Fragment>
      )}
      {formik.errors.password ? (
        <Text style={styles.error}>{formik.errors.password}</Text>
      ) : (
        <Fragment></Fragment>
      )}
      {formik.errors.passwordConfirmation ? (
        <Text style={styles.error}>{formik.errors.passwordConfirmation}</Text>
      ) : (
        <Fragment></Fragment>
      )}
    </View>
  );
}

function validationSchema() {
  return {
    nombre: Yup.string().required("Ingrese su nombre"),
    apellido: Yup.string().required("Ingrese sus apellidos"),
    email: Yup.string()
      .email("El email no es válido")
      .required("Ingrese un email"),
    celular: Yup.string()
      .required("Ingrese una contraseña")
      .min(9, "Ingrese un número móvil válido")
      .max(9, "Ingrese un número móvil válido"),
    password: Yup.string()
      .required("Ingrese una contraseña")
      .min(
        8,
        "La contraseña es muy corta, debe tener 8 caracteres como mínimo"
      ),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Las contraseñas deben coincidir"
    ),
  };
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
