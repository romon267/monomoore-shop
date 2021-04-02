import React from 'react';
import { useAppSelector } from '../../lib/hooks/useRedux';
import { CartState } from '../../lib/state/cartReducer';
import {
  CartTable,
} from './CartElements';

const CartElement = (): JSX.Element => {
  const cart = useAppSelector((state) => state.cart as CartState);

  return (
    <CartTable>
      <thead>
        <tr>
          <th>Товар</th>
          <th>Количество</th>
          <th>Цена</th>
        </tr>
      </thead>
      <tbody>
        {cart.products.map((p) => (
          <tr key={p.id}>
            <td>{p.title}</td>
            <td>{p.quantity}</td>
            <td>{p.price * p.quantity}</td>
          </tr>
        ))}
        <tr>
          <td>Всего:</td>
          <td>{cart.totalQuantity}</td>
          <td>{cart.totalPrice}</td>
        </tr>
      </tbody>
    </CartTable>
  );
};

export default CartElement;
