import { StyleSheet } from "react-native";

import { THEME } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 8,
  },

  text: {
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONTS.ROBOTO_BOLD,
    fontSize: THEME.SIZES.ROBOTO.BUTTON
  }
})