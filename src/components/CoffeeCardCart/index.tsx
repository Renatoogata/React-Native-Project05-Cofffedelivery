import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { Minus, Plus, Trash } from 'phosphor-react-native'

import { StorageCartProps } from "@storage/storageCart";

import { styles } from "./styles";
import { THEME } from "@styles/theme";

type Props = {
  coffee: StorageCartProps
  removeCoffee: (productId: number) => void;
  addOne: (productId: number) => void;
  removeOne: (productId: number) => void;
}

export function CoffeeCardCart({ coffee, removeCoffee, addOne, removeOne }: Props) {
  const priceFormated = coffee.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  function handleRemoveCoffee() {
    Alert.alert("Remover", "Deseja realmente remover esse produto?", [
      {
        text: 'Sim',
        onPress: () => removeCoffee(coffee.id)
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function handleAddOne() {
    addOne(coffee.id)
  }

  function handleRemoveOne() {
    removeOne(coffee.id)
  }

  return (
    <View style={styles.container}>
      <View style={{ paddingVertical: 10 }}>
        <Image
          source={coffee.image}
          style={{ width: 64, height: 64 }}
        />
      </View>

      <View style={styles.infoContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.coffeeName}>
            {coffee.name}
          </Text>

          <Text style={styles.coffeePrice}>
            R$ {priceFormated}
          </Text>
        </View>

        <Text style={styles.coffeeMl}>
          {coffee.size}ml
        </Text>

        <View style={styles.footer}>
          <View style={styles.card}>

            <TouchableOpacity onPress={handleRemoveOne}>
              <Minus
                color={THEME.COLORS.PURPLE}
                size={20}
              />
            </TouchableOpacity>

            <Text style={styles.quantity}>
              {coffee.quantity}
            </Text>

            <TouchableOpacity onPress={handleAddOne}>
              <Plus
                color={THEME.COLORS.PURPLE}
                size={20}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.trash} onPress={handleRemoveCoffee}>
            <Trash
              color={THEME.COLORS.PURPLE}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}