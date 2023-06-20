import { StyleSheet } from "react-native"

import { THEME } from "@styles/theme"

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.GRAY_200,
    padding: 12,
    borderRadius: 4,
  },

  icon: {
    marginRight: 8,
  },

  input: {
    color: THEME.COLORS.GRAY_500,
    fontSize: THEME.SIZES.ROBOTO.MD,
  }
})