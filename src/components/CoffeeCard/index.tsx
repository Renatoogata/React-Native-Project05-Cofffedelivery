import { View, Text, Image } from "react-native";

import SvgUri from 'expo-svg-uri';

import { CoffeeProduct } from "@dtos/CoffeeProduct";
import CoffeeImg from '@assets/coffee/Type=Americano.svg'

import { styles } from "./styles";

export function CoffeeCard({ id, name, description, price, tag, image }: CoffeeProduct) {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <CoffeeImg
          width={120}
          height={120}
        />

      </View>

      <Text style={styles.type}>
        {tag.toUpperCase()}
      </Text>

      <Text style={styles.name}>
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
          {price}
        </Text>
      </View>
    </View>
  )
}