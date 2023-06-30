import { Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Animated, { FadeInUp, ZoomIn, ZoomOut } from 'react-native-reanimated';

import { styles } from "./styles";

type props = {
  id: number;
  index: number
  name: string;
  description: string;
  price: number;
  image: any;
}

export function CoffeeCardHorizontal({ id, name, description, price, image, index }: props) {
  const navigation = useNavigation()
  const priceFormated = price.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  const TouchableOpacityAnimated = Animated.createAnimatedComponent(TouchableOpacity);

  function handleOpenCoffee() {
    navigation.navigate('coffee', { productId: id })
  }

  return (
    <TouchableOpacityAnimated
      entering={ZoomIn.duration(300).delay(index * 60)}
      style={styles.container}
      onPress={handleOpenCoffee}
    >
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
    </TouchableOpacityAnimated>
  )
}