import { StyleSheet } from "react-native"

import { THEME } from '@styles/theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 72,
    paddingBottom: 20,

  },

  headerText: {
    flex: 1,
    marginLeft: 2,
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.SIZES.ROBOTO.SM,
    color: THEME.COLORS.GRAY_900,
  },

  cartNumber: {
    position: 'absolute',
    right: 1,
    marginTop: -14,
    marginRight: -4,

    backgroundColor: THEME.COLORS.YELLOW,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1000,
    width: 18,
    height: 18,
  },

  text: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.SIZES.ROBOTO.XS,
    color: THEME.COLORS.WHITE,
  }
})