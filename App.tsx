import 'react-native-gesture-handler'

import { StatusBar } from 'react-native';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'
import { Baloo2_700Bold } from '@expo-google-fonts/baloo-2'

import { CartContextProvider } from '@contexts/CartContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Loading } from '@components/Loading';
import { Routes } from '@routes/index';

import Toast from 'react-native-toast-message';


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold, Baloo2_700Bold })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, }}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />

      <CartContextProvider>
        <Routes />
      </CartContextProvider>
      <Toast />
    </GestureHandlerRootView>
  );
}