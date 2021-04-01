import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import prisma from '../../../lib/prisma';
import { Product } from '.prisma/client';

const ProductPage = ({ product }: { product: Product }): JSX.Element => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>
        {product.fullDescription}
      </p>
    </div>
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
