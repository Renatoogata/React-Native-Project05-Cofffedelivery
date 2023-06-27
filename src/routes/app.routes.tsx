import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AppStart } from '@screens/AppStart';
import { Home } from '@screens/Home';
import { Coffee } from '@screens/Coffee';
import { Cart } from '@screens/Cart';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name='appstart'
        component={AppStart}
      />
      <Screen
        name='home'
        component={Home}
      />
      <Screen
        name='coffee'
        component={Coffee}
      />
      <Screen
        name='cart'
        component={Cart}
      />
    </Navigator>
  )
}