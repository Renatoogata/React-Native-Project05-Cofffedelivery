import { Text, View } from "react-native";

import { HomeHeader } from "@components/HomeHeader";

import { styles } from "./styles";
import { CoffeeCard } from "@components/CoffeeCard";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HomeHeader />
      </View>

      <View style={styles.body}>
        <View style={styles.carrousel}>
          <CoffeeCard />
          <CoffeeCard />
        </View>
      </View>
    </View>
  )
}