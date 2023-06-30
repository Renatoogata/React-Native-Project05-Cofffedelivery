import { createContext, ReactNode, useState, useEffect } from "react";
import { StorageCartProps, storageProductChangeQuantity, storageProductGetAll, storageProductRemove, storageProductSave, storageRemoveAll } from "@storage/storageCart";


export type CartContextDataProps = {
  addProductCart: (newProduct: StorageCartProps) => Promise<void>;
  removeProductCart: (productId: number) => Promise<void>;
  addOrRemoveOneQuantity: (productId: number, operation: boolean) => Promise<void>;
  removeAll: () => Promise<void>
  cart: StorageCartProps[];
}

type CartContextProviderProps = {
  children: ReactNode;
}

export const CartContext = createContext<CartContextDataProps>({} as CartContextDataProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<StorageCartProps[]>([]);

  async function addProductCart(newProduct: StorageCartProps) {
    try {
      const storageResponse = await storageProductSave(newProduct)
      setCart(storageResponse);
    } catch (error) {
      throw (error)
    }
  }

  async function removeProductCart(productId: number) {
    try {
      const storageResponse = await storageProductRemove(productId);
      setCart(storageResponse);
    } catch (error) {
      throw (error)
    }
  }

  async function addOrRemoveOneQuantity(productId: number, operation: boolean) {
    try {
      const storageResponse = await storageProductChangeQuantity(productId, operation);
      setCart(storageResponse)
    } catch (error) {
      throw (error)
    }
  }

  async function removeAll() {
    const storageResponse = await storageRemoveAll();
    setCart(storageResponse);
  }

  useEffect(() => {
    storageProductGetAll()
      .then(products => setCart(products))
      .catch(error => console.log(error))
  }, []);

  return (
    <CartContext.Provider value={{
      cart,
      addProductCart,
      removeProductCart,
      addOrRemoveOneQuantity,
      removeAll
    }}>
      {children}
    </CartContext.Provider>
  )
}

