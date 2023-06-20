import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'
import { Baloo2_700Bold } from '@expo-google-fonts/baloo-2'

import { Home } from '@screens/Home';
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold, Baloo2_700Bold })

  return (
    !fontsLoaded ? <Home /> : <Loading />
  );
}