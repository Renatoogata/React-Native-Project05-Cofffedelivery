import { useEffect } from "react";
import { View } from "react-native";
import Animated, { SlideInUp } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import Logo from '@assets/logo.svg'

export function AppStart() {
  const navigation = useNavigation()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('home')
    }, 3500);

    return () => clearTimeout(timer);
  }, []);
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