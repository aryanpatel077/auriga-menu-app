import Navbar from "@/app/components/Navbar";
import ProductNavbar from "./components/ProductNavbar";
import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
import ProductHeader from "./components/ProductHeader";
import ProductTitle from "./components/ProductTitle";
import ProductDescription from "./components/ProductDescription";
import ProductImages from "./components/ProductImages";


const prisma = new PrismaClient();

interface Props {
  params: {
    slug: string;
  };
}

interface productType {
  id: number;
  slug: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  images: string[];
}

const fetchProducts = async (slug: string): Promise<productType> => {
  const product = await prisma.products.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      title: true,
      description: true,
      images: true,
      slug: true,
      rating: true,
      brand: true,
      category: true,
      price: true,
      discountPercentage: true,
      stock: true,
    },
  });

  if (!product) {
    notFound();
  }

  return product;
};

export default async function page({ params }: Props) {

  const product = await fetchProducts(params.slug);
  // console.log(Product);

  return (
    <>
    <div className="bg-white w-[70%] rounded p-3 shadow">
      <ProductNavbar slug={product.slug} />
      <ProductTitle title={product.title} />
      <ProductDescription description={product.description} />
      <ProductImages images={product.images} />
      </div>
    </>
);
}



