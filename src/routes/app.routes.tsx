import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AppStart } from '@screens/AppStart';
import { Home } from '@screens/Home';

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
    </Navigator>
  )
}