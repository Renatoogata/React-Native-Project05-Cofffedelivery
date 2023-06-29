import { createContext, ReactNode, useState } from "react";
import { StorageCartProps } from "@storage/storageCart";


export type CartContextDataProps = {
  cart: StorageCartProps[];
}

type CartContextProviderProps = {
  children: ReactNode;
}

export const CartContext = createContext<CartContextDataProps>({} as CartContextDataProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<StorageCartProps[]>([]);

  return (
    <CartContext.Provider value={{
      cart,
    }}>
      {children}
    </CartContext.Provider>
  )
}

