import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import orderService from '../../lib/services/orders';
import orderItemService from '../../lib/services/orderItems';
import { useAppDispatch, useAppSelector } from '../../lib/hooks/useRedux';
import {
  addToCart, removeFromCart, CartState, clearCart, CartProduct,
} from '../../lib/state/cartReducer';
import {
  CheckoutWrapper,
  Header,
  Body,
  AddressForm,
  Cart,
  AddressHeader,
  AddressInput,
  AddressLabel,
  CartItem,
  ItemBtn,
  ItemBtnWrap,
  ItemDesc,
  ItemName,
  ItemPriceWrap,
  ItemTextWrap,
  CheckoutBtn,
  Notification,
  ItemLink,
} from './CheckoutElements';
import { flashNotification } from '../../lib/state/notificationReducer';

const CheckoutLayout = (): JSX.Element => {
  const cart = useAppSelector((state) => state.cart as CartState);
  const notification = useAppSelector((state) => state.notification);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [index, setIndex] = useState('');
  const dispatch = useAppDispatch();
  console.log(cart.totalQuantity);

  const handleIncrement = (product: CartProduct) => {
    dispatch(addToCart(product));
  };

  const handleDecrement = (product: CartProduct) => {
    dispatch(removeFromCart(product));
  };

  const clearForm = (): void => {
    setName('');
    setEmail('');
    setCity('');
    setStreet('');
    setIndex('');
  };

  const isFilled = (): boolean => {
    if (name !== ''
    && email !== ''
    && city !== ''
    && street !== ''
    && index !== '') {
      return true;
    }
    return false;
  };

  const isDisabled = () => !(cart.totalQuantity !== 0 && isFilled());

  const handleOrder = async () => {
    if (!isDisabled()) {
      console.log('placing order');
      const newOrder = {
        customerName: name,
        customerEmail: email,
        shipCity: city,
        shipStreet: street,
        shipIndex: index,
        shipDetails: 'details',
        paid: false,
        complete: false,
      };
      try {
        const createdOrder = await orderService.createNew(newOrder);
        const items = cart.products;
        const promisedResults = items.map(async (i) => orderItemService.createNew({
          orderId: createdOrder.id,
          productId: i.id,
          quantity: i.quantity,
        }));
        const savedResults = await Promise.all(promisedResults);
        console.log('SAVED ALL TO DB');
        console.log(savedResults, createdOrder);
        dispatch(clearCart());
        clearForm();
        // @ts-expect-error cannot reslove react-redux typings right now
        // due to lack of experience with typescript
        // this is thunk action
        dispatch(flashNotification('success', '?????????? ???????????? ??????????????, ?????????????????? ??????????!', 10));
      } catch (error) {
        // @ts-expect-error thunk
        dispatch(flashNotification('error', '???????????? ?????? ???????????????????? ????????????!', 5));
        console.log('Error during creating an order', error);
      }
    }
  };

  return (
    <CheckoutWrapper>
      <Notification message={notification?.message}>
        {notification?.message}
      </Notification>
      <Header>?????????????????? ???????? ?????????? ?? ????????????????</Header>
      <Body>
        <AddressForm>
          <AddressHeader>??????????</AddressHeader>
          <AddressLabel>
            ??????
            <AddressInput
              required
              type="text"
              placeholder="???????? ??????"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </AddressLabel>
          <AddressLabel>
            Email
            <AddressInput
              required
              type="text"
              placeholder="Email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </AddressLabel>
          <AddressLabel>
            ??????????
            <AddressInput
              required
              type="text"
              placeholder="??????????"
              value={city}
              onChange={({ target }) => setCity(target.value)}
            />
          </AddressLabel>
          <AddressLabel>
            ??????????, ??????, ????????????????
            <AddressInput
              required
              type="text"
              placeholder="??????????, ??????, ????????????????"
              value={street}
              onChange={({ target }) => setStreet(target.value)}
            />
          </AddressLabel>
          <AddressLabel>
            ????????????
            <AddressInput
              required
              type="text"
              placeholder="????????????"
              value={index}
              onChange={({ target }) => setIndex(target.value)}
            />
          </AddressLabel>
        </AddressForm>
        <Cart>
          <AddressHeader>??????????????</AddressHeader>
          {cart.products.map((p) => (
            <CartItem key={p.id}>
              <ItemTextWrap>
                <ItemName>
                  <Link href={`/shop/product/${p.id}`}>
                    <ItemLink>
                      {p.title}
                    </ItemLink>
                  </Link>
                  {' '}
                  x
                  {' '}
                  {p.quantity}
                </ItemName>
                <ItemDesc>{p.shortDescription}</ItemDesc>
              </ItemTextWrap>
              <ItemBtnWrap>
                <ItemBtn type="button" onClick={() => handleDecrement(p)}>
                  <FontAwesomeIcon icon={faMinus} />
                </ItemBtn>
                <ItemBtn onClick={() => handleIncrement(p)}>
                  <FontAwesomeIcon icon={faPlus} />
                </ItemBtn>
              </ItemBtnWrap>
              <ItemPriceWrap>
                {p.price * p.quantity}
                ??.
              </ItemPriceWrap>
            </CartItem>
          ))}
          <CheckoutBtn
            disabled={isDisabled()}
            onClick={handleOrder}
          >
            ????????????????
          </CheckoutBtn>
        </Cart>
      </Body>
    </CheckoutWrapper>
  );
};

export default CheckoutLayout;
