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

  body: {
    marginTop: -80,
    paddingHorizontal: 32,
  },

  carrousel: {
    flexDirection: 'row',
  }
});