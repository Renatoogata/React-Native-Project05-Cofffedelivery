import { Text } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

import { Button, colors } from "@components/Button";

import BikeSvg from '@assets/moto.svg'
import Animated, { SlideInRight, BounceIn } from "react-native-reanimated";

export function Successful() {
  const navigation = useNavigation();

  function handleBackToHome() {
    navigation.navigate('home')
  }

  return (
    <Animated.View style={styles.container} entering={BounceIn.delay(1200).duration(600)}>
      <BikeSvg />

      <Text style={styles.title}>
        Uhu! Pedido confirmado
      </Text>

      <Text style={styles.description}>
        Agora é só aguardar que logo o café chegará até você!
      </Text>

      <Animated.View style={styles.button} entering={SlideInRight.delay(3000).duration(600)}>
        <Button
          color={colors.purpleDark}
          title='IR PARA A HOME'
          onPress={handleBackToHome}
        />
      </Animated.View>
    </Animated.View>
  )
}