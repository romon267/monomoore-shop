import Link from 'next/link';
import { Product } from '.prisma/client';
import { useAppDispatch } from '../../lib/hooks/useRedux';
import { addToCart as addToCartAction } from '../../lib/state/cartReducer';
import {
  Container,
  WrapperT,
  WrapperB,
  Title,
  Description,
  Price,
  CartButton,
  Img,
} from './ProductCardElements';

export interface CartProps {
  id: number;
  title: string;
  price: number;
  shortDescription: string;
}

const ProductCard = ({ product }: { product: Product }): JSX.Element => {
  const dispatch = useAppDispatch();
  const addToCart = ({
    id, price, title, shortDescription,
  }: CartProps) => {
    dispatch(addToCartAction({
      id, price, title, shortDescription,
    }));
  };

  return (
    <Container>
      <WrapperT>
        <Img src={product.imgUrl} width={300} height={200} quality={100} alt="product image" />
        <Link href={`/shop/product/${product.id}`}>
          <Title>{product.title}</Title>
        </Link>
        <Description>{product.shortDescription}</Description>
      </WrapperT>
      <WrapperB>
        <Price>
          {product.price}
          р.
        </Price>
        <CartButton type="button" onClick={() => addToCart(product)}>
          В корзину
        </CartButton>
      </WrapperB>
    </Container>
  );
};

export default ProductCard;
