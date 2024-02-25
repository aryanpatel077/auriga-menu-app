import Card from "./components/Card";
import { PrismaClient } from "@prisma/client";
import Header from "./components/Header";

export interface productCardType {
  id: number,
  slug: string,
  title: string;
  brand: string;
  thumbnail: string;
  price: number;
  rating: number;
  stock: number;
  discountPercentage: number;
}

const prisma = new PrismaClient();

const fetchProducts = async (): Promise<productCardType[]> => {
  let products = await prisma.products.findMany({
    select: {
      id: true,
      slug: true,
      title: true,
      brand: true,
      thumbnail: true,
      price: true,
      rating: true,
      stock: true,
      discountPercentage: true,
    },
  });
  return products;
};

export default async function Home() {
  const products = await fetchProducts();
  console.log({ products });
  return (
    <>
    <Header/>
    <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
      {products.map((product) => (
        <Card product={product} />
      ))}
    </div>
  </>
  );
}
