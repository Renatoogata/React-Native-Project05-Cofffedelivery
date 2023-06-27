import { StyleSheet } from "react-native";

import { THEME } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.WHITE,
    paddingHorizontal: 32,
    paddingTop: 72,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 30,
  },

  title: {
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: THEME.SIZES.BALOO2.SM,
    color: THEME.COLORS.GRAY_200,
  },


  //Scrollview

  footer: {
    paddingTop: 30,
    height: 140
  },

  text: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.SIZES.ROBOTO.MD,
    color: THEME.COLORS.GRAY_200,
  },

  textPrice: {
    fontFamily: THEME.FONTS.ROBOTO_BOLD,
    fontSize: THEME.SIZES.ROBOTO.MD,
    color: THEME.COLORS.GRAY_200,
  }
})