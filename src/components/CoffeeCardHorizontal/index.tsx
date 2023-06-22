import { Text, View } from "react-native";
import { styles } from "./styles";

import CoffeeImg from '@assets/coffee/Type=Americano.svg'

export function CoffeeCardHorizontal() {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <CoffeeImg
          width={96}
          height={96}
        />
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>
          Expresso Tradicional
        </Text>

        <Text style={styles.description}>
          O tradicional café feito com água quente e grãos moídos
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
    </View>
  )
}