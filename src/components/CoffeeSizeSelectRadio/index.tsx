import { TouchableOpacity, View, Text } from "react-native";

import { THEME } from "@styles/theme";
import { styles } from "./styles";

type props = {
  options: string[];
  selectedSize: string;
  onSelectSize: (size: string) => void;
}

export function CoffeeSizeSelectRadio({ options, onSelectSize, selectedSize }: props) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
      {options.map((size, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onSelectSize(size)}
        >
          <View style={[styles.container, { borderColor: size === selectedSize ? THEME.COLORS.PURPLE : THEME.COLORS.WHITE }]}>
            <Text style={[styles.text, { color: size === selectedSize ? THEME.COLORS.PURPLE : THEME.COLORS.GRAY_300 }]}>
              {size}ml
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}