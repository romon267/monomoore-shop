import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';
import prisma from '../../../lib/prisma';
import { Product } from '.prisma/client';
import {
  Container,
  Column1,
  Column2,
  Gallery,
  MainImage,
  SelectorWrap,
  NextImage,
  SmallImage,
  ProdHeader,
  Price,
  Stock,
  Description,
  AddToCartBtn,
} from './ProductPageElements';
import { useAppDispatch } from '../../../lib/hooks/useRedux';
import { addToCart } from '../../../lib/state/cartReducer';

const ProductPage = ({ product }: { product: Product }): JSX.Element => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [mainImage, setMainImage] = useState(product.detailImages[0]);

  const swapNextImage = () => {
    if (mainImage === product.detailImages[0]) {
      setMainImage(product.detailImages[1]);
    } else if (mainImage === product.detailImages[1]) {
      setMainImage(product.detailImages[2]);
    } else {
      setMainImage(product.detailImages[0]);
    }
  };

  const swapPrevImage = () => {
    if (mainImage === product.detailImages[0]) {
      setMainImage(product.detailImages[2]);
    } else if (mainImage === product.detailImages[1]) {
      setMainImage(product.detailImages[0]);
    } else {
      setMainImage(product.detailImages[1]);
    }
  };

  if (router.isFallback) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <Container>
      <Column1>
        <Gallery>
          <MainImage src={mainImage} width={600} height={500} />
          <SelectorWrap>
            <NextImage
              src="/shop/prev.svg"
              width={33}
              height={60}
              onClick={swapPrevImage}
            />
            {product.detailImages.map((img) => (
              <SmallImage
                key={img}
                src={img}
                width={90}
                height={90}
                onClick={() => setMainImage(img)}
              />
            ))}
            <NextImage
              src="/shop/next.svg"
              width={33}
              height={60}
              onClick={swapNextImage}
            />
          </SelectorWrap>
        </Gallery>
      </Column1>
      <Column2>
        <ProdHeader>{product.title}</ProdHeader>
        <Price>
          {product.price}
          р.
        </Price>
        <Stock>В наличии</Stock>
        <Description>{product.fullDescription}</Description>
        <AddToCartBtn
          type="button"
          onClick={() => dispatch(addToCart(product))}
        >
          Добавить в корзину
        </AddToCartBtn>
      </Column2>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await prisma.product.findMany({
    where: {
      deleted: false,
    },
  });
  const paths = products.map((p) => ({
    params: {
      id: p.id.toString(),
    },
  }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log('params', params);
  const product = await prisma.product.findFirst({
    where: {
      id: Number(params?.id) || -1,
    },
  });
  console.log('product', product);
  return { props: { product }, revalidate: 1 };
};

export default ProductPage;
