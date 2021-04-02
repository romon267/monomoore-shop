import { Reducer } from 'redux';

export interface CartProduct {
  id: number;
  price: number;
  title: string;
  quantity: number;
  shortDescription: string;
}

export interface CartState {
  products: CartProduct[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export interface CartAction {
  type: string;
  payload?: CartProduct[];
}

const getCartPrice = (cart: CartProduct[]) => {
  let totalPrice = 0;
  cart.forEach((c) => {
    totalPrice += c.quantity * c.price;
  });
  return totalPrice;
};

const getCartItems = (cart: CartProduct[]) => {
  let totalQuantity = 0;
  cart.forEach((c) => {
    totalQuantity += c.quantity;
  });
  return totalQuantity;
};

const getCartFromStorage = (): CartProduct[] => {
  const cartFromStorage = window.localStorage.getItem('cart');
  let cartToReturn: CartProduct[];
  if (!cartFromStorage) {
    cartToReturn = [];
    window.localStorage.setItem('cart', JSON.stringify(cartToReturn));
  } else {
    cartToReturn = JSON.parse(cartFromStorage);
  }
  return cartToReturn;
};

export const cartReducer: Reducer = (
  state: CartState = initialState,
  action,
) => {
  switch (action.type) {
    case 'UPDATE_CART':
      return {
        products: action.payload || [],
        totalQuantity: getCartItems(action.payload || []),
        totalPrice: getCartPrice(action.payload || []),
      };
    case 'CLEAR_CART':
      return {
        products: [],
        totalQuantity: 0,
        totalPrice: 0,
      };
    default:
      return state;
  }
};

export const initializeCart = (): CartAction => ({
  type: 'UPDATE_CART',
  payload: getCartFromStorage(),
});

export const addToCart = ({
  id,
  title,
  price,
  shortDescription,
}: Omit<CartProduct, 'quantity'>): CartAction => {
  const existingCart = getCartFromStorage();
  const existingProduct = existingCart.find((p) => p.id === id);
  let newCart: CartProduct[] = [];
  // if product is in cart already
  if (existingProduct) {
    const newProduct: CartProduct = {
      ...existingProduct,
      quantity: existingProduct.quantity + 1,
    };
    newCart = existingCart.map((p) => (p.id === existingProduct.id ? newProduct : p));
    window.localStorage.setItem('cart', JSON.stringify(newCart));
  } else {
    // if product is new
    const newProduct: CartProduct = {
      id,
      title,
      price,
      shortDescription,
      quantity: 1,
    };
    newCart = [...existingCart, newProduct];
    window.localStorage.setItem('cart', JSON.stringify(newCart));
  }
  return {
    type: 'UPDATE_CART',
    payload: newCart,
  };
};

export const removeFromCart = ({ id }: CartProduct): CartAction => {
  const existingCart = getCartFromStorage();
  const existingProduct = existingCart.find((p) => p.id === id);
  let newCart: CartProduct[] = [];
  if (existingProduct) {
    const newProduct: CartProduct = {
      ...existingProduct,
      quantity: existingProduct.quantity - 1,
    };
    // Decrement quantity if its q not 0, remove product if its q is 0
    if (newProduct.quantity > 0) {
      newCart = existingCart.map((p) => (p.id === existingProduct.id ? newProduct : p));
    } else {
      newCart = existingCart.filter((p) => p.id !== existingProduct.id);
    }
    window.localStorage.setItem('cart', JSON.stringify(newCart));
  } else {
    throw new Error('Product not found during decrement attempt');
  }
  return {
    type: 'UPDATE_CART',
    payload: newCart,
  };
};

export const clearCart = (): CartAction => {
  window.localStorage.setItem('cart', JSON.stringify([]));
  return {
    type: 'CLEAR_CART',
  };
};
