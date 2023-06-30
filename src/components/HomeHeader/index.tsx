import { View, Text, TouchableOpacity } from "react-native";
import { MapPin, ShoppingCart } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "@hooks/useCart";

import { THEME } from "@styles/theme";
import { styles } from "./styles";
import Animated, { color, interpolateColor, SharedValue, useAnimatedStyle } from "react-native-reanimated";

type Props = {
  scrollY: SharedValue<number>
}


export function HomeHeader({ scrollY }: Props) {
  const navigation = useNavigation()
  const { cart } = useCart()

  function handleOpenCart() {
    navigation.navigate('cart');
  }

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        scrollY.value,
        [424, 460],
        [THEME.COLORS.GRAY_900, THEME.COLORS.GRAY_200]
      )
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MapPin
          size={22}
          color={THEME.COLORS.PURPLE}
          weight='fill'
        />
        <Animated.Text style={[styles.headerText, animatedTextStyle]}>
          Porto Alegre, RS
        </Animated.Text>

        <TouchableOpacity style={{ paddingHorizontal: 8 }} onPress={handleOpenCart}>
          {
            cart.length > 0 &&
            <View style={styles.cartNumber}>
              <Text style={styles.text}>{cart.length}</Text>
            </View>
          }
          <ShoppingCart
            size={24}
            color={THEME.COLORS.YELLOW}
            weight='fill'
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}