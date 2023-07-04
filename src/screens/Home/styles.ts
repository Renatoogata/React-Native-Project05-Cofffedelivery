import { StyleSheet } from 'react-native';
import { THEME } from '@styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.WHITE,
  },

  header: {
    backgroundColor: THEME.COLORS.GRAY_100,
    paddingHorizontal: 32,

  },

  title: {
    paddingTop: 18,
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: THEME.SIZES.ROBOTO.LG,
    color: THEME.COLORS.WHITE,
    marginBottom: 15,
  },

  image: {
    alignSelf: 'flex-end',
    marginBottom: 42,
  },


  body: {
    marginTop: -100,
    paddingLeft: 32,
  },

  carrousel: {
    flexDirection: 'row',
  },

  subtitle: {
    marginTop: 10,
    marginBottom: 10,
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: THEME.SIZES.BALOO2.SM,
    color: THEME.COLORS.GRAY_300,
  },

  type: {
    flexDirection: 'row'
  },

  typeCoffee: {
    marginTop: 20,
    marginBottom: 24,
    fontFamily: THEME.FONTS.BALOO2_BOLD,
    fontSize: THEME.SIZES.BALOO2.XS,
    color: THEME.COLORS.GRAY_100,
  },
});