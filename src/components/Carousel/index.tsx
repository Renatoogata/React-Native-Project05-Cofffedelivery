import { Dimensions, FlatList, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CoffeeCard } from "@components/CoffeeCard";

import { CoffeeProduct } from '@dtos/CoffeeProduct'
import { styles } from "./styles";


//const { width } = Dimensions.get('window');

interface CarouselProps {
  products: CoffeeProduct[];
}

export function Carousel({ coffeeList }: any) {
  const renderSeparator = () => <View style={styles.separator} />;
  const navigation = useNavigation();

  function handleOpenCoffee(productId: string) {
    navigation.navigate('coffee', { productId })
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={coffeeList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleOpenCoffee(item.id)}>
            <CoffeeCard
              id={item.id}
              image={item.image}
              tag={item.tag}
              name={item.name}
              description={item.description}
              price={item.price}
              size={item.size}
            />
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