import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

export enum colors {
  yellowRegular = '#DBAC2C',
  yellowDark = '#C47F17',
  purpleRegular = '#8047F8',
  purpleDark = '#4B2995'
}

type props = TouchableOpacityProps & {
  title: string
  color: colors
}

export function Button({ title, color, ...rest }: props) {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: color }]} {...rest}>
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}