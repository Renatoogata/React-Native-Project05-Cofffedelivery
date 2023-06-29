import AsyncStorage from "@react-native-async-storage/async-storage";

import { CART_STORAGE } from "./storageConfig";

export type StorageCartProps = {
  id: number;
  image: any;
  name: string;
  size: number;
  quantity: number;
  price: number;
}

export async function storageProductGetAll() {
  try {
    const storage = await AsyncStorage.getItem(CART_STORAGE)
    const products: StorageCartProps[] = storage ? JSON.parse(storage) : [];

    return products;
  } catch (error) {
    throw (error)
  }
}

export async function storageProductSave(newProduct: StorageCartProps) {
  try {
    let products = await storageProductGetAll();

    const productExists = products.filter(product => product.id === newProduct.id)

    if (productExists.length > 0) {
      products = products.map(product => {
        if (product.id === newProduct.id) {
          product.quantity = Number(product.quantity) + Number(newProduct.quantity)
          product.price = Number(product.price) + Number(newProduct.quantity * newProduct.price)
        }

        return product;
      });
    } else {
      products.push(newProduct);
    }

    const productsUpdated = JSON.stringify(products);
    await AsyncStorage.setItem(CART_STORAGE, productsUpdated);

  } catch (error) {
    throw (error)
  }
}

export async function storageProductChangeQuantity(productId: number, price: number, add?: boolean, sub?: boolean) {
  try {
    let products = await storageProductGetAll();

    const productExists = products.filter(item => item.id === productId);

    if (productExists.length > 0) {
      products = products.map(product => {
        if (product.id === productId && add) {
          product.quantity = Number(product.quantity + 1)
          product.price = Number(product.price + price)
        }

        if (product.id === productId && sub) {
          product.quantity = Number(product.quantity - 1)
          product.price = Number(product.price - price)
        }

        return product
      });
    }

    const productsUpdated = JSON.stringify(products);
    await AsyncStorage.setItem(CART_STORAGE, productsUpdated);
  } catch (error) {
    throw (error)
  }
}

export async function storageProductRemove(productId: number) {
  try {
    const products = await storageProductGetAll();

    const productsUpdated = products.filter(product => product.id !== productId);
    await AsyncStorage.setItem(CART_STORAGE, JSON.stringify(productsUpdated))

    return productsUpdated;

  } catch (error) {
    throw (error)
  }
}