import { AuthProvider } from "./src/context/AuthContext";
import { RegProvider } from "./src/context/RegContext";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/navigation/NavigationStack";
import NavigationTab from "./src/navigation/NavigationTab";
import NavigationDrawer from "./src/navigation/NavigationDrawer";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <RegProvider>
          <NavigationStack />
        </RegProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
