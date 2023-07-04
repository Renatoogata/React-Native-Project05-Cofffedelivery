import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { getCoffees } from "@api/mock/coffeeList";

import { HomeHeader } from "@components/HomeHeader";
import { Carousel } from "@components/Carousel";
import { Input } from "@components/Input";
import { CoffeeType } from "@components/CoffeeType";
import { CoffeeCardHorizontal } from "@components/CoffeeCardHorizontal";

import { CoffeeProduct } from "@dtos/CoffeeProduct";

import CoffeeImg from '@assets/coffee.svg'
import { styles } from "./styles";
import { THEME } from "@styles/theme";

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

  const scrollY = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = (event.contentOffset.y)
    }
  })

  const animatedHeaderStyle = useAnimatedStyle(() => {
    return {
      paddingLeft: interpolate(
        scrollY.value,
        [0, 424, 460, 2000],
        [32, 32, 52, 52]
      ),
      paddingRight: interpolate(
        scrollY.value,
        [0, 424, 460, 2000],
        [32, 32, 18, 18]
      ),
      backgroundColor: interpolateColor(
        scrollY.value,
        [424, 460],
        [THEME.COLORS.GRAY_100, THEME.COLORS.WHITE]
      )
    }
  })

  useEffect(() => {
    getCoffees().then((data) => {
      setCoffeeList(data)
    });
  }, [])

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, animatedHeaderStyle]}>
        <HomeHeader scrollY={scrollY} />
      </Animated.View>
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingBottom: 12 }}
        showsVerticalScrollIndicator={false}
      >
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
                filterTradicional.map((coffee, index) => (
                  <CoffeeCardHorizontal key={coffee.id} index={index} image={coffee.image} id={coffee.id} name={coffee.name} description={coffee.description} price={coffee.price} />
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
                filterSweet.map((coffee, index) => (
                  <CoffeeCardHorizontal key={coffee.id} index={index} image={coffee.image} id={coffee.id} name={coffee.name} description={coffee.description} price={coffee.price} />
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
                filterSpecial.map((coffee, index) => (
                  <CoffeeCardHorizontal key={coffee.id} index={index} image={coffee.image} id={coffee.id} name={coffee.name} description={coffee.description} price={coffee.price} />
                ))
              }
            </View>
          }
        </View>
      </Animated.ScrollView>
    </View>
  )
}