import React from "react";
import { View } from "react-native";
import SignupForm from "../components/Signup/SignupForm";
import BlockerDataForm from "../components/Signup/BlockerDataForm";
import useReg from "../hooks/useReg";
import useAuth from "../hooks/useAuth";

export default function BlockerHome() {
  const { reg } = useReg();
  const { auth } = useAuth();
  return <View>{reg ? <BlockerDataForm /> : <SignupForm />}</View>;
}
