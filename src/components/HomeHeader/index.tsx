import { View, Text, TouchableOpacity } from "react-native";
import { MapPin, ShoppingCart } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

import { THEME } from "@styles/theme";
import { styles } from "./styles";

export function HomeHeader() {
  const navigation = useNavigation()

  function handleOpenCart() {
    navigation.navigate('cart');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MapPin
          size={22}
          color={THEME.COLORS.PURPLE}
          weight='fill'
        />
        <Text style={styles.headerText}>
          Porto Alegre, RS
        </Text>

        <TouchableOpacity style={{ paddingHorizontal: 8 }} onPress={handleOpenCart}>
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