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
  const [coffeeList, setCoffeeList] = useState<CoffeeProduct[]>([]);
  const [typeFilter, setTypeFilter] = useState<string[]>(['tradicional']);

  const filterTradicional = coffeeList.filter(coffee => coffee.tag === 'tradicional')
  const filterSweet = coffeeList.filter(coffee => coffee.tag === 'doce')
  const filterSpecial = coffeeList.filter(coffee => coffee.tag === 'especial')

  function handleFilterByType(type: string) {
    if (typeFilter.find(filter => filter === type) && typeFilter.length > 1) {
      const newFilter = typeFilter.filter((filter) => filter !== type)
      setTypeFilter(newFilter);
    } else if (!typeFilter.find(filter => filter === type)) {
      setTypeFilter((state) => [...state, type]);
    }
  }

  console.log(typeFilter)

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
            <CoffeeType name="TRADICIONAIS" typeIsSelected={typeFilter.includes('tradicional')} onPress={(() => handleFilterByType('tradicional'))} />
            <CoffeeType name="DOCES" typeIsSelected={typeFilter.includes('doce')} onPress={(() => handleFilterByType('doce'))} />
            <CoffeeType name="ESPECIAIS" typeIsSelected={typeFilter.includes('especial')} onPress={(() => handleFilterByType('especial'))} />
          </View>

          {
            typeFilter.find(filter => filter === 'tradicional')
            &&
            <View>
              <Text style={styles.typeCoffee}>
                Tradicionais
              </Text>
              {
                filterTradicional.map((coffee) => (
                  <CoffeeCardHorizontal key={coffee.id} id={coffee.id} name={coffee.name} description={coffee.description} price={coffee.price} />
                ))
              }
            </View>
          }

          {
            typeFilter.find(filter => filter === 'doce')
            &&
            <View>
              <Text style={styles.typeCoffee}>
                Doces
              </Text>
              {
                filterSweet.map((coffee) => (
                  <CoffeeCardHorizontal key={coffee.id} id={coffee.id} name={coffee.name} description={coffee.description} price={coffee.price} />
                ))
              }
            </View>
          }

          {
            typeFilter.find(filter => filter === 'especial')
            &&
            <View>
              <Text style={styles.typeCoffee}>
                Especial
              </Text>
              {
                filterSpecial.map((coffee) => (
                  <CoffeeCardHorizontal key={coffee.id} id={coffee.id} name={coffee.name} description={coffee.description} price={coffee.price} />
                ))
              }
            </View>
          }
        </View>
      </ScrollView>
    </View>
  )
}