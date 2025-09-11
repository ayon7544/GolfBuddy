import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNavigator";
import "./global.css";
import { useFonts } from "expo-font";
import { Fonts } from "./assets/fonts/font";

export default function App() {
  const [fontsLoader] = useFonts(Fonts);
  if (!fontsLoader) {
    return null;
  }
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
