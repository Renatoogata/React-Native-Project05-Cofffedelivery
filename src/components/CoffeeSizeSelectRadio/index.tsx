import { TouchableOpacity, View, Text } from "react-native";

import { THEME } from "@styles/theme";
import { styles } from "./styles";


type props = {
  options: string[];
  selectedOption: string;
  onSelectOption: (size: string) => void;
}

export function CoffeeSizeSelectRadio({ options, onSelectOption, selectedOption }: props) {
  return (
    <View>
      {options.map((size, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onSelectOption(size)}
        >
          <View style={[styles.container, { borderColor: size === selectedOption ? THEME.COLORS.PURPLE : THEME.COLORS.WHITE }]}>
            <Text style={styles.text}>
              {size}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}