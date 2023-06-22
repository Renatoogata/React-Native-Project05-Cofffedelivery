import { StyleSheet } from "react-native";
import { THEME } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -12,
  },

  image: {
    paddingBottom: 60,
  },

  info: {
    paddingRight: 32,
    marginLeft: 6,
    width: 210,
  },

  name: {
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: THEME.SIZES.ROBOTO.SM,
    color: THEME.COLORS.GRAY_200,
  },

  description: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.SIZES.ROBOTO.XS,
    color: THEME.COLORS.GRAY_400,
    flexShrink: 1
  },

  priceContainer: {
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'baseline'
  },

  currencyType: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.SIZES.ROBOTO.SM,
    color: THEME.COLORS.YELLOW_DARK,
    marginRight: 2,
  },

  price: {
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: THEME.SIZES.ROBOTO.LG,
    color: THEME.COLORS.YELLOW_DARK,
  }
})