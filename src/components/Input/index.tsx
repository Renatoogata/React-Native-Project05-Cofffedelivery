import { useState } from "react";
import { TextInput, View, TextInputProps, TouchableOpacity } from "react-native"
import { MagnifyingGlass } from "phosphor-react-native";

import { styles } from "./styles"
import { THEME } from '@styles/theme'

type props = TextInputProps;

export function Input({ ...rest }: props) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity disabled={!isFocus}>
        <MagnifyingGlass
          style={styles.icon}
          color={!isFocus ? THEME.COLORS.GRAY_300 : THEME.COLORS.YELLOW}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholderTextColor={THEME.COLORS.GRAY_400}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        {...rest}
      />
    </View>
  )
}