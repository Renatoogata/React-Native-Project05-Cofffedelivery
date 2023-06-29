import { ImageSourcePropType } from 'react-native'

export type CoffeeProduct = {
  id: number;
  name: string;
  description: string;
  tag: string;
  price: number;
  size: number[];
  image: any;
}