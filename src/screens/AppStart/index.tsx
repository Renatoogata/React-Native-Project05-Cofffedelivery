import { useEffect } from "react";
import { View } from "react-native";
import Animated, { SlideInRight } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

import Logo from '@assets/logoImg.svg'
import LogoText from '@assets/logoText.svg'

import { styles } from "./styles";

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
      <Animated.View entering={SlideInRight.delay(400).duration(600)}>
        <Logo />
      </Animated.View>
      <Animated.View style={{ marginLeft: 10, }} entering={SlideInRight.delay(1200).duration(600)}>
        <LogoText />
      </Animated.View>
    </View>
  )
}