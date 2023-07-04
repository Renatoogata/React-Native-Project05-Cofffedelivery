import { View, Text } from "react-native"
import { ShoppingCart } from "phosphor-react-native"

import { useNavigation } from "@react-navigation/native"

import { THEME } from "@styles/theme"
import { styles } from "./styles"
import { Button, colors } from "@components/Button"

export function CartEmpty() {
  const navigation = useNavigation();

  function handleOpenCatalog() {
    navigation.navigate('home');
  }

  return (
    <View style={styles.container}>
      <ShoppingCart size={32} color={THEME.COLORS.GRAY_500} weight={"bold"} />

      <Text style={styles.text}>
        Seu carrinho está vazio.
      </Text>

      <Button
        title="Ver Catálogo"
        color={colors.purpleDark}
        onPress={handleOpenCatalog}
      />
    </View>
  )
}