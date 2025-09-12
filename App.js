import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNavigator";
import "./global.css";
import { useFonts } from "expo-font";
import { Fonts } from "./assets/fonts/font";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
export default function App() {
  const [fontsLoader] = useFonts(Fonts);
  if (!fontsLoader) {
    return null;
  }
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}
