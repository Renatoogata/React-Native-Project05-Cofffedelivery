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
    paddingBottom: 38,

  },

  headerText: {
    flex: 1,
    marginLeft: 2,
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.SIZES.ROBOTO.SM,
    color: THEME.COLORS.GRAY_900,
  },

  title: {
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: THEME.SIZES.ROBOTO.LG,
    color: THEME.COLORS.WHITE,
    marginBottom: 15,
  },

  image: {
    alignSelf: 'flex-end',
    marginBottom: 42,
  },
})