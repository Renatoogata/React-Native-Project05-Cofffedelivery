import { StyleSheet } from "react-native";

import { THEME } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.WHITE,
  },

  body: {
    backgroundColor: THEME.COLORS.GRAY_100,
    paddingHorizontal: 32,
    paddingTop: 72,
  },

  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  typeCoffeeContainer: {
    marginTop: 34,
    maxWidth: 86,
    backgroundColor: THEME.COLORS.GRAY_300,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
  },

  typeCoffeeText: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.SIZES.ROBOTO.TAG,
    color: THEME.COLORS.WHITE,
    alignSelf: 'center',
  },

  infoContainer: {
    marginTop: 12,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: THEME.SIZES.BALOO2.LG,
    color: THEME.COLORS.WHITE,
  },

  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },

  currencyType: {
    marginRight: 4,

    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.SIZES.ROBOTO.SM,
    color: THEME.COLORS.YELLOW,
  },

  price: {
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: THEME.SIZES.BALOO2.XL,
    color: THEME.COLORS.YELLOW,
  },

  description: {
    marginTop: 12,

    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.SIZES.ROBOTO.MD,
    color: THEME.COLORS.GRAY_500,

    paddingBottom: 300,
  },

  image: {
    position: 'absolute',
    top: 340,
    alignSelf: 'center',
  },

  footer: {
    marginTop: 60,
    paddingHorizontal: 32,
    backgroundColor: THEME.COLORS.WHITE,
  },

  sizeText: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.SIZES.ROBOTO.SM,
    color: THEME.COLORS.GRAY_400,
  },

  footerOptions: {
    paddingHorizontal: 8,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})