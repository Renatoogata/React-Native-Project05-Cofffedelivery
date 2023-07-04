import { useRef, useState } from "react";
import { TouchableOpacity, View, Text, FlatList, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, Trash } from 'phosphor-react-native';

import { Swipeable } from 'react-native-gesture-handler';

import { useCart } from "@hooks/useCart";

import { showToast } from "@components/Toast";
import { Button, colors } from "@components/Button";
import { CoffeeCardCart } from "@components/CoffeeCardCart";
import { CartEmpty } from "@components/CartEmpty";

import { THEME } from "@styles/theme";
import { styles } from "./styles";
import { useEffect } from "react";

export function Cart() {
  const [total, setTotal] = useState(0)

  const swipeableRefs = useRef<Swipeable[]>([]);

  const priceFormated = total.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  const { cart, removeProductCart, addOrRemoveOneQuantity, removeAll } = useCart()
  const navigation = useNavigation()

  function totalPriceCalculate() {
    const totalPrice = cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
    setTotal(totalPrice);
  }

  async function removeCoffee(productId: number) {
    try {
      await removeProductCart(productId)
      showToast({ message: 'Café removido do carrinho com sucesso!', type: "success" })
    } catch (error) {
      showToast({ message: 'Falha ao remover. Tente novamente mais tarde!', type: "error" })
      throw (error)
    }
  }

  async function addOne(productId: number) {
    try {
      const operation = true
      await addOrRemoveOneQuantity(productId, operation)
      showToast({ message: 'Adicionado 1 volume com sucesso!', type: "success" })
    } catch (error) {
      showToast({ message: 'Falha ao adicionar. Tente novamente mais tarde!', type: "error" })
      throw (error)
    }
  }

  async function removeOne(productId: number) {
    try {
      const operation = false
      await addOrRemoveOneQuantity(productId, operation)
      showToast({ message: 'Removido 1 volume com sucesso!', type: "success" })
    } catch (error) {
      showToast({ message: 'Falha ao remover. Tente novamente mais tarde!', type: "error" })
      throw (error)
    }
  }

  async function handleFinishOrder() {
    try {
      await removeAll();
      showToast({ message: 'Pedido realizado com sucesso!', type: "success" })
      navigation.navigate('successful')
    } catch (error) {
      showToast({ message: 'Falha ao finalizar pedido. Tente novamente mais tarde!', type: "error" })
      throw (error)
    }
  }

  function handleRemoveCoffee(coffeeId: number, index: number) {
    swipeableRefs.current?.[index].close(); // fechando o Swipeable por referencia

    Alert.alert("Remover", "Deseja realmente remover esse produto?", [
      {
        text: 'Sim',
        onPress: () => removeCoffee(coffeeId)
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    totalPriceCalculate()
  }, [cart])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={{ position: 'absolute', left: 32 }}>
          <ArrowLeft
            size={24}
            color={THEME.COLORS.GRAY_100}
          />
        </TouchableOpacity>

        <Text style={styles.title}>
          Carrinho
        </Text>
      </View>

      <FlatList
        data={cart}
        keyExtractor={(item) => (String(item.id))}
        renderItem={({ item, index }) => (
          <Swipeable
            ref={(ref) => {
              if (ref) {
                swipeableRefs.current.push(ref);
              }
            }}
            overshootLeft={false} // para deslizar até o fim só deixar true
            containerStyle={styles.swipeableContainer}
            renderRightActions={() => null}
            leftThreshold={60}
            onSwipeableOpen={() => handleRemoveCoffee(item.id, index)}
            renderLeftActions={() => (
              <View
                style={styles.swipeableRemove}
              >
                <Trash
                  size={32}
                  color={THEME.COLORS.RED_DARK}
                />
              </View>
            )}
          >
            <CoffeeCardCart coffee={item} removeCoffee={removeCoffee} addOne={addOne} removeOne={removeOne} />
          </Swipeable>
        )}
        style={{ flex: 1, }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
        ListEmptyComponent={() => (
          <CartEmpty />
        )}
      />

      <View style={styles.footer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
          <Text style={styles.text}>
            Valor Total
          </Text>

          <Text style={styles.textPrice}>
            R$ {priceFormated}
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