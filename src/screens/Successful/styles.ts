import { StyleSheet } from "react-native";

import { THEME } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: THEME.COLORS.WHITE,
    paddingHorizontal: 32,
    paddingTop: 120,
  },

  title: {
    marginTop: 42,

    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: THEME.SIZES.BALOO2.LG,
    color: THEME.COLORS.YELLOW_DARK,
  },

  description: {
    marginTop: 10,
    marginBottom: 80,
    textAlign: 'center',
    width: '80%',

    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.SIZES.ROBOTO.SM,
    color: THEME.COLORS.GRAY_200,
  },

  button: {
    flex: 1,
    width: '72%'
  },
})