import { useState } from "react";
import { TouchableOpacity, View, Text, ScrollView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from 'phosphor-react-native'

import { Button, colors } from "@components/Button";
import { CoffeeCardCart } from "@components/CoffeeCardCart";

import { THEME } from "@styles/theme";
import { styles } from "./styles";

export function Cart() {
  const [list, setList] = useState([0, 1, 2, 3])

  const navigation = useNavigation()

  function handleFinishOrder() {
    navigation.navigate('successful')
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={{ left: 1, position: 'absolute' }}>
          <ArrowLeft
            size={24}
            color={THEME.COLORS.GRAY_100}
          />
        </TouchableOpacity>

        <Text style={styles.title}>
          Carrinho
        </Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <CoffeeCardCart />

      </ScrollView>

      <View style={styles.footer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
          <Text style={styles.text}>
            Valor Total
          </Text>

          <Text style={styles.textPrice}>
            R$ 9,90
          </Text>
        </View>

        <Button
          title="CONFIRMAR PEDIDO"
          color={colors.yellowRegular}
          onPress={handleFinishOrder}
        />
      </View>
    </View>
  )
}