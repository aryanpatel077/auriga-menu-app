import ProductDetailCard from "./ProductDetailCard";
import { Products} from "@prisma/client";

export default function ProductDetail({ Product }: { Product: Products[] }) {
  return (
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        {Product.length ? (
          <div className="flex flex-wrap justify-between">
            {Product.map((Products: Products) => (
              <ProductDetailCard products={Products} />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-between">
            <p>This restaurant does not have menu !!</p>
          </div>
        )}
       {/* <ProductDetailCard/> */}
      </div>
    </main>
  );
}
