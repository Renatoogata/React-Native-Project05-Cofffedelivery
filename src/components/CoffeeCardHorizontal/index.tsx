import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import CoffeeImg from '@assets/coffee/Type=Americano.svg'

type props = {
  id: number;
  name: string;
  description: string;
  price: number;
}

export function CoffeeCardHorizontal({ id, name, description, price }: props) {
  const navigation = useNavigation()

  const priceFormated = price.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  function handleOpenCoffee() {
    navigation.navigate('coffee', { productId: id })
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleOpenCoffee}>
      <View style={styles.image}>
        <CoffeeImg
          width={96}
          height={96}
        />
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>
          {name}
        </Text>

        <Text style={styles.description}>
          {description}
        </Text>

        <View style={styles.priceContainer}>
          <Text style={styles.currencyType}>
            R$
          </Text>

          <Text style={styles.price}>
            {priceFormated}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}