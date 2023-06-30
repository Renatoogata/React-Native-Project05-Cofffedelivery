import { useRef } from "react";
import { Pressable, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { THEME } from "@styles/theme";
import { styles } from "./styles";
import { useEffect } from "react";

type props = TouchableOpacityProps & {
  name: string
  typeIsSelected: boolean
}

export function CoffeeType({ name, typeIsSelected = false, ...rest }: props) {
  const PressableAnimated = Animated.createAnimatedComponent(Pressable)
  const scale = useSharedValue(1);
  const checked = useSharedValue(1);

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      backgroundColor: interpolateColor(
        checked.value,
        [0, 1],
        [THEME.COLORS.WHITE, THEME.COLORS.PURPLE]
      )
    }
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        checked.value,
        [0, 1],
        [THEME.COLORS.PURPLE, THEME.COLORS.WHITE]
      )
    }
  });

  function onPressIn() {
    scale.value = withTiming(1.2, { easing: Easing.sin, duration: 200 })

    setTimeout(() => {
      scale.value = withTiming(1, { easing: Easing.sin, duration: 200 })
    }, 200) // forma de lidar com a escala que não volta se soltar muito rapido
  }

  function onPressOut() {
    scale.value = withTiming(1, { easing: Easing.ease, duration: 100 })
  }

  useEffect(() => {
    checked.value = withTiming(typeIsSelected ? 1 : 0, { duration: 100 })
  }, [typeIsSelected])

  return (
    <PressableAnimated
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      activeOpacity={1}
      style={[styles.container, animatedContainerStyle]}
      {...rest}
    >
      <Animated.Text style={[styles.text, animatedTextStyle]}>
        {name}
      </Animated.Text>
    </PressableAnimated>
  )
}