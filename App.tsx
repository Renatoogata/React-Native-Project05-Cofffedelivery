import { StatusBar } from 'react-native';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'
import { Baloo2_700Bold } from '@expo-google-fonts/baloo-2'

import { Loading } from '@components/Loading';
import { Routes } from '@routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold, Baloo2_700Bold })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />

      <Routes />
    </>
  );
}