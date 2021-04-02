import { useState } from 'react';
import Link from 'next/link';
import CartTable from './CartElemTable';
import {
  CartButton,
  CartCard,
  CartClear,
  ButtonWrapper,
  Checkout,
} from './CartElements';
import { useAppDispatch, useAppSelector } from '../../lib/hooks/useRedux';
import { clearCart } from '../../lib/state/cartReducer';

const Cart = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  const handleOpening = () => {
    console.log(`${isOpen} => ${!isOpen}`);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <CartButton onClick={handleOpening} type="button">
        Корзина:
        {' '}
        {cart.totalQuantity}
      </CartButton>
      <CartCard isOpen={isOpen}>
        <CartTable />
        <ButtonWrapper>
          <CartClear type="button" onClick={() => dispatch(clearCart())}>
            Очистить корзину
          </CartClear>
          <Link href="/shop/checkout">
            <Checkout onClick={handleOpening}>
              К оплате
            </Checkout>
          </Link>
        </ButtonWrapper>
      </CartCard>
    </>
  );
};

export default Cart;
