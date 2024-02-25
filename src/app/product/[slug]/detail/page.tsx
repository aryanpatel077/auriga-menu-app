import ProductNavbar from '../components/ProductNavbar'
import ProductDetail from '../components/ProductDetail'
import { PrismaClient } from "@prisma/client";
import { title } from 'process';


const prisma = new PrismaClient();

const getproductDetail = async (slug: string) => {

    const detail = await prisma.products.findUnique({
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

    if (!detail) {
        throw new Error();
      }
    
      return detail.title;
    };

export default async function page({ params }: { params: { slug: string } }) {
    const items = await getproductDetail(params.slug);
  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
       <ProductNavbar slug={params.slug}/>
       <ProductDetail products={title}/>
    </div>
  )
}
