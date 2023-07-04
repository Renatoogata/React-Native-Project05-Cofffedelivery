import { StyleSheet } from "react-native";

import { THEME } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: 60,
  },

  text: {
    marginTop: 14,
    marginBottom: 30,

    color: THEME.COLORS.GRAY_400,
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.SIZES.ROBOTO.MD
  }
})