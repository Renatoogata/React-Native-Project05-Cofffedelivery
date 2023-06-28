import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { ArrowLeft, ShoppingCart, Plus, Minus } from 'phosphor-react-native'
import { useNavigation, useRoute } from "@react-navigation/native";

import { Button, colors } from "@components/Button";
import { CoffeeSizeSelectRadio } from "@components/CoffeeSizeSelectRadio";

import { getCoffees } from "@api/mock/coffeeList";

import coffeeCup from '@assets/coffeeCup.png'
import { THEME } from "@styles/theme";
import { styles } from "./styles";
import { CoffeeProduct } from "@dtos/CoffeeProduct";

type RouteParamsProps = {
  productId: number
}

export function Coffee() {
  const route = useRoute()
  const { productId } = route.params as RouteParamsProps

  const [coffeeSelected, setCoffeeSelected] = useState<CoffeeProduct>()
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('')

  const navigation = useNavigation()

  const priceFormated = coffeeSelected?.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  function handleBackToHome() {
    navigation.navigate('home')
  }

  function handleOpenCart() {
    navigation.navigate('cart')
  }

  function handleSelectSize(size: string) {
    setSelectedSize(size);
  }

  function handleAddQuantity() {
    if (quantity < 9) {
      setQuantity(quantity + 1)
    }
  }

  function handleSubtractQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  function handleAddToCart() {
    console.log('Adicionao ao carrinho')
  }

  useEffect(() => {
    getCoffees().then((data) => {
      const coffee = data.filter(data => data.id === productId)
      setCoffeeSelected(coffee[0])
    })
  }, [productId])

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

          <TouchableOpacity style={{ paddingHorizontal: 8 }} onPress={handleOpenCart}>
            <ShoppingCart
              size={24}
              color={THEME.COLORS.PURPLE}
              weight='fill'
            />
          </TouchableOpacity>
        </View>

        <View style={styles.typeCoffeeContainer}>
          <Text style={styles.typeCoffeeText}>
            {coffeeSelected?.tag.toUpperCase()}
          </Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.title}>
            {coffeeSelected?.name}
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

        <Text style={styles.description}>
          {coffeeSelected?.description}
        </Text>

        <View style={styles.image}>
          <Image
            source={coffeeCup}
          />
        </View>

      </View>
      <View style={styles.footer}>
        <Text style={styles.sizeText}>Selecione o tamanho:</Text>

        <CoffeeSizeSelectRadio
          options={['114', '140', '227']}
          selectedSize={selectedSize}
          onSelectSize={handleSelectSize}
        />

        <View style={styles.footerOptions}>


          <TouchableOpacity
            style={{ marginRight: 18 }}
            onPress={handleSubtractQuantity}
            disabled={quantity === 1}
          >
            <Minus size={20} color={quantity === 1 ? THEME.COLORS.PURPLE_LIGHT : THEME.COLORS.PURPLE} />
          </TouchableOpacity>

          <Text>
            {quantity}
          </Text>

          <TouchableOpacity
            style={{ marginLeft: 18, marginRight: 26 }}
            onPress={handleAddQuantity}
            disabled={quantity === 9}
          >
            <Plus size={20} color={quantity === 9 ? THEME.COLORS.PURPLE_LIGHT : THEME.COLORS.PURPLE} />
          </TouchableOpacity>


          <Button
            title="ADICIONAR"
            color={colors.purpleDark}
            onPress={handleAddToCart}
          />
        </View>
      </View>
    </View>
  )
}