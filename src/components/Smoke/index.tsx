import { View, Image } from "react-native";
import { Canvas, Path } from "@shopify/react-native-skia";

import coffeeCup from '@assets/coffeeCup.png'
import Smoke1 from '@assets/smoke/Property 1=Smoke 6.svg'

import { styles } from "./styles";

export function Smoke() {
  return (
    <View style={styles.container}>
      <Smoke1 style={{
        position: 'absolute',
        top: -100,
        right: 100,
      }} />
      <Image
        source={coffeeCup}
      />
    </View >
  )
}