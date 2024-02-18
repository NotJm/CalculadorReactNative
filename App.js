import { View } from "react-native-web";
import { Calculadora } from "./components/Calculadora";
import { styles } from "./components/Styles";


export default function App() {
  return (
    <View style={styles.container}>
      <Body />
    </View>
  );
}

export const Body = () => {
  return (
    <View style={styles.containerCalculadora}>
      <Calculadora />
    </View>
  )
}
