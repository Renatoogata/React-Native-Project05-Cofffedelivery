import { View, Text, Image } from "react-native";

import { CoffeeProduct } from "@dtos/CoffeeProduct";
import { styles } from "./styles";

type Props = CoffeeProduct;

export function CoffeeCard({ id, name, description, price, tag, image }: Props) {
  const priceFormated = price.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  return (
    <View
      style={styles.container}
    >
      <View style={styles.image}>
        <Image
          source={image}
          style={{ width: 120, height: 120 }}
        />

      </View>

      <Text style={styles.type}>
        {tag.toUpperCase()}
      </Text>

      <Text numberOfLines={1} style={styles.name}>
        {name}
      </Text>

      <Text style={styles.decription}>
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
  )
}