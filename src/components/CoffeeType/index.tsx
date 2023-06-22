import { Text, View } from "react-native";
import { styles } from "./styles";

type props = {
  name: string
}

export function CoffeeType({ name }: props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {name}
      </Text>
    </View>
  )
}