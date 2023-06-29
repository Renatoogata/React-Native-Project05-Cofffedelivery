import { Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

type props = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: any;
}

export function CoffeeCardHorizontal({ id, name, description, price, image }: props) {
  const navigation = useNavigation()

  const priceFormated = price.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  function handleOpenCoffee() {
    navigation.navigate('coffee', { productId: id })
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleOpenCoffee}>
      <View style={styles.image}>
        <Image
          source={image}
          style={{ width: 96, height: 96 }}
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