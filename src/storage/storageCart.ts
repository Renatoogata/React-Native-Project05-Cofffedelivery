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
      newProduct.price = Number(newProduct.quantity * newProduct.price)
      products.push(newProduct);
    }

    const productsUpdated = JSON.stringify(products);
    await AsyncStorage.setItem(CART_STORAGE, productsUpdated);
    return products;

  } catch (error) {
    throw (error)
  }
}

export async function storageProductChangeQuantity(productId: number, operation: boolean) {
  // operation true => soma 
  // operation false => subtração
  try {
    let products = await storageProductGetAll();

    const productExists = products.filter(item => item.id === productId);

    if (productExists.length > 0) {
      products = products.map(product => {
        if (product.id === productId && operation === true) {
          const price = product.price / product.quantity
          product.quantity = Number(product.quantity + 1)
          product.price = Number(product.price + price)
        }

        if (product.id === productId && operation === false && product.quantity > 1) {
          const price = product.price / product.quantity
          product.quantity = Number(product.quantity - 1)
          product.price = Number(product.price - price)
        }

        return product
      });
    }

    const productsUpdated = JSON.stringify(products);
    await AsyncStorage.setItem(CART_STORAGE, productsUpdated);
    return products
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

export async function storageRemoveAll() {
  try {
    await AsyncStorage.setItem(CART_STORAGE, '')

    return [];
  } catch (error) {
    throw (error)
  }

}