import { GetStaticProps } from 'next';
import prisma from '../../lib/prisma';
import { Product } from '.prisma/client';
import ShopLayout from '../../components/ShopLayout';

const Shop = ({ products }: { products: Product[] }): JSX.Element => {
  console.log('log top', products);
  const toLog = products.map((p) => p.title);
  console.log(toLog);
  return (
    <div>
      <ShopLayout products={products} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await prisma.product.findMany({
    where: {
      deleted: false,
    },
  });
  console.log('log bottom', products);
  return { props: { products }, revalidate: 1 };
};

export default Shop;
