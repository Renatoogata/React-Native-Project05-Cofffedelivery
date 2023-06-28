import { StyleSheet } from "react-native";
import { THEME } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    width: 208,
    height: 262,
    backgroundColor: THEME.COLORS.GRAY_800,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 26,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 6,

    alignItems: 'center',

  },

  image: {
    marginTop: -34,
  },

  type: {
    marginTop: 6,
    backgroundColor: THEME.COLORS.PURPLE_LIGHT,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    color: THEME.COLORS.PURPLE_DARK,
    fontFamily: THEME.FONTS.ROBOTO_BOLD,
    fontSize: THEME.SIZES.ROBOTO.TAG
  },

  name: {
    marginTop: 16,
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: THEME.SIZES.BALOO2.MD,
    color: THEME.COLORS.GRAY_200,
  },

  decription: {
    marginTop: 6,
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.SIZES.ROBOTO.XS,
    color: THEME.COLORS.GRAY_400,
    textAlign: "center",
  },

  priceContainer: {
    flexDirection: 'row',
    marginTop: 22,
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