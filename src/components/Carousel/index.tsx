import { Dimensions, FlatList, View } from "react-native";
import { CoffeeProduct } from '@dtos/CoffeeProduct'
import { CoffeeCard } from "@components/CoffeeCard";
import { styles } from "./styles";


//const { width } = Dimensions.get('window');

interface CarouselProps {
  products: CoffeeProduct[];
}

export function Carousel({ products }: any) {
  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <CoffeeCard />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  )
}