import { Product } from '.prisma/client';
import ProductCard from '../ProductCard';
import {
  ShopContainer,
  ShopWrapper,
  ShopHeader,
} from './ShopLayoutElements';

const ShopLayout = ({ products }: { products: Product[] }): JSX.Element => (
  <ShopContainer>
    <ShopHeader>
      Магазин
    </ShopHeader>
    <ShopWrapper>
      {products.map((p) => <ProductCard key={p.id} product={p} />)}
    </ShopWrapper>
  </ShopContainer>
);

export default ShopLayout;
