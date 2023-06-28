import { View, Text } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

import { Button, colors } from "@components/Button";

import BikeSvg from '@assets/moto.svg'

export function Successful() {
  const navigation = useNavigation();

  function handleBackToHome() {
    navigation.navigate('home')
  }

  return (
    <View style={styles.container}>
      <BikeSvg />

      <Text style={styles.title}>
        Uhu! Pedido confirmado
      </Text>

      <Text style={styles.description}>
        Agora é só aguardar que logo o café chegará até você!
      </Text>

      <View style={styles.button}>
        <Button
          color={colors.purpleDark}
          title='IR PARA A HOME'
          onPress={handleBackToHome}
        />
      </View>
    </View>
  )
}