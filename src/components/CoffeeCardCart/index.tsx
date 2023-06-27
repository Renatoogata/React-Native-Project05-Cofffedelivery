import { View, Text, TouchableOpacity } from "react-native";
import { Minus, Plus, Trash } from 'phosphor-react-native'

import CoffeeSvg from '@assets/coffee/Type=Americano.svg'

import { styles } from "./styles";
import { THEME } from "@styles/theme";

export function CoffeeCardCart() {
  return (
    <View style={styles.container}>
      <View style={{ paddingVertical: 10 }}>
        <CoffeeSvg
          width={64}
          height={64}
        />
      </View>

      <View style={styles.infoContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.coffeeName}>
            Irlandês
          </Text>

          <Text style={styles.coffeePrice}>
            R$ 9,99
          </Text>
        </View>

        <Text style={styles.coffeeMl}>
          227ml
        </Text>

        <View style={styles.footer}>
          <View style={styles.card}>

            <TouchableOpacity>
              <Minus
                color={THEME.COLORS.PURPLE}
                size={20}
              />
            </TouchableOpacity>

            <Text style={styles.quantity}>
              1
            </Text>

            <TouchableOpacity>
              <Plus
                color={THEME.COLORS.PURPLE}
                size={20}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.trash}>
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