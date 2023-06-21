import { View, Text } from "react-native";
import { styles } from "./styles";

import CoffeeImg from '@assets/coffee/Type=Americano.svg'

export function CoffeeCard() {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <CoffeeImg
          width={120}
          height={120}
        />
      </View>

      <Text style={styles.type}>
        TRADICIONAL
      </Text>

      <Text style={styles.name}>
        Latte
      </Text>

      <Text style={styles.decription}>
        Café expresso com o dobro de leite e espuma cremosa
      </Text>

      <View style={styles.priceContainer}>
        <Text style={styles.currencyType}>
          R$
        </Text>

        <Text style={styles.price}>
          9,90
        </Text>
      </View>
    </View>
  )
}