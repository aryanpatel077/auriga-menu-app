import {Products} from "@prisma/client";

export default function RestaurantMenuCard({ products }: { products: Products }) {
  return (
    <>
      <div className=" border rounded p-3 w-[49%] mb-3">
        <h3 className="font-bold text-lg">{}</h3>
        <p className="font-light mt-1 text-sm">{products.description}</p>
        <p className="mt-7">{products.price}</p>
      </div>
    </>
  );
}