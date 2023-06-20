import { Text, View } from "react-native";

import { HomeHeader } from "@components/HomeHeader";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <HomeHeader />
    </View>
  )
}