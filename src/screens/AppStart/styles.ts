import { StyleSheet } from 'react-native';
import { THEME } from '@styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.PURPLE
  },

  logo: {
    width: 80,
    height: 100
  }
})