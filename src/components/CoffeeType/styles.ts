import { StyleSheet } from "react-native";
import { THEME } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: THEME.COLORS.WHITE,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: THEME.COLORS.PURPLE,
    marginRight: 8,
  },

  text: {
    // color: THEME.COLORS.PURPLE_DARK,
    fontSize: THEME.SIZES.ROBOTO.TAG
  }
})