import { Dimensions, FlatList, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CoffeeCard } from "@components/CoffeeCard";

import { CoffeeProduct } from '@dtos/CoffeeProduct'
import { styles } from "./styles";


//const { width } = Dimensions.get('window');

interface CarouselProps {
  products: CoffeeProduct[];
}

export function Carousel({ products }: any) {
  const renderSeparator = () => <View style={styles.separator} />;
  const navigation = useNavigation();

  function handleOpenCoffee() {
    navigation.navigate('coffee')
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={handleOpenCoffee}>
            <CoffeeCard />
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  )
}