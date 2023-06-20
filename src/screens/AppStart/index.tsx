import { styles } from "./styles";
import { View } from "react-native";
import Animated, { SlideInUp } from "react-native-reanimated";

import Logo from '@assets/logo.svg'

export function AppStart() {
  return (
    <View
      style={styles.container}
    >
      <Animated.View entering={SlideInUp}>
        <Logo />
      </Animated.View>
    </View>
  )
}