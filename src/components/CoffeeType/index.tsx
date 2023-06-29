import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { THEME } from "@styles/theme";
import { styles } from "./styles";

type props = TouchableOpacityProps & {
  name: string
  typeIsSelected: boolean
}

export function CoffeeType({ name, typeIsSelected, ...rest }: props) {
  return (
    <TouchableOpacity
      style={[styles.container, typeIsSelected && { backgroundColor: THEME.COLORS.PURPLE }]}
      {...rest}
    >
      <Text style={[styles.text, typeIsSelected && { color: THEME.COLORS.WHITE }]}>
        {name}
      </Text>
    </TouchableOpacity>
  )
}