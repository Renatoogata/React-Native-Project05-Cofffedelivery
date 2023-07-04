import { StyleSheet } from "react-native";

import { THEME } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    paddingHorizontal: 32,
    flexDirection: 'row',
    backgroundColor: THEME.COLORS.WHITE,
    borderTopWidth: 1,
    borderTopColor: THEME.COLORS.GRAY_800,
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.GRAY_800,
  },

  infoContainer: {
    flex: 1,
    marginLeft: 12,
  },

  coffeeName: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.SIZES.ROBOTO.MD,
    color: THEME.COLORS.GRAY_100,
  },

  coffeePrice: {
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: THEME.SIZES.BALOO2.SM,
    color: THEME.COLORS.GRAY_100,
  },

  coffeeMl: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.SIZES.ROBOTO.SM,
    color: THEME.COLORS.GRAY_400,
  },

  footer: {
    marginTop: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },

  card: {
    width: 90,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    border: 1,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: THEME.COLORS.GRAY_600,
    marginRight: 20,
  },

  quantity: {
    marginLeft: 10,
    marginRight: 10,
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.SIZES.ROBOTO.MD,
    color: THEME.COLORS.GRAY_100,
  },

  trash: {
    padding: 6,
    backgroundColor: THEME.COLORS.GRAY_700,
    borderRadius: 4,
  }
})