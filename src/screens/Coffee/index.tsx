import { useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { ArrowLeft, ShoppingCart } from 'phosphor-react-native'
import { useNavigation } from "@react-navigation/native";

import coffeeCup from '@assets/coffeeCup.png'

import { THEME } from "@styles/theme";
import { styles } from "./styles";
import { CoffeeSizeSelectRadio } from "@components/CoffeeSizeSelectRadio";

export function Coffee() {
  const [selectedSize, setSelectedSize] = useState('')

  const navigation = useNavigation()

  function handleBackToHome() {
    navigation.navigate('home')
  }

  function handleSelectSize(size: string) {
    setSelectedSize(size);
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.head}>
          <TouchableOpacity onPress={handleBackToHome}>
            <ArrowLeft
              size={24}
              color={THEME.COLORS.WHITE}
            />
          </TouchableOpacity>

          <TouchableOpacity style={{ paddingHorizontal: 8 }}>
            <ShoppingCart
              size={24}
              color={THEME.COLORS.PURPLE}
              weight='fill'
            />
          </TouchableOpacity>
        </View>

        <View style={styles.typeCoffeeContainer}>
          <Text style={styles.typeCoffeeText}>
            ESPECIAL
          </Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.title}>
            Irlandês
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

        <Text style={styles.description}>
          Bebida a base de café, uísque irlandês, açucar e chantilly
        </Text>

        <View style={styles.image}>
          <Image
            source={coffeeCup}
          />
        </View>

      </View>
      <View style={styles.footer}>
        <Text>Selecione o tamanho</Text>
        <CoffeeSizeSelectRadio
          options={['114', '140', '227']}
          selectedOption={selectedSize}
          onSelectOption={handleSelectSize}
        />
      </View>
    </View>
  )
}