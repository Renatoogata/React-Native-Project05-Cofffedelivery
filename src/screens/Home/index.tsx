import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";

import { getCoffees } from "@api/mock/coffeeList";

import { HomeHeader } from "@components/HomeHeader";
import { Carousel } from "@components/Carousel";
import { Input } from "@components/Input";
import { CoffeeType } from "@components/CoffeeType";

import { styles } from "./styles";
import CoffeeImg from '@assets/coffee.svg'
import { CoffeeCardHorizontal } from "@components/CoffeeCardHorizontal";
import { CoffeeProduct } from "@dtos/CoffeeProduct";

export function Home() {
  const [products, setProducts] = useState([1, 2, 3, 4, 5, 6, 7])
  const [coffeeList, setCoffeeList] = useState<CoffeeProduct[]>([]);

  useEffect(() => {
    getCoffees().then((data) => {
      setCoffeeList(data)
    });
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HomeHeader />
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Encontre o café perfeito para qualquer hora do dia
          </Text>

          <Input
            placeholder="Pesquisar"
          />

          <CoffeeImg
            style={styles.image}
          />
        </View>

        <View style={styles.body}>
          <View style={styles.carrousel}>
            <Carousel coffeeList={coffeeList} />
          </View>

          <Text style={styles.subtitle}>
            Nossos cafés
          </Text>

          <View style={styles.type}>
            <CoffeeType name="TRADICIONAIS" />
            <CoffeeType name="DOCES" />
            <CoffeeType name="ESPECIAIS" />
          </View>

          <Text style={styles.typeCoffee}>
            Tradicionais
          </Text>

          <CoffeeCardHorizontal />
          <CoffeeCardHorizontal />
          <CoffeeCardHorizontal />
        </View>
      </ScrollView>
    </View>
  )
}