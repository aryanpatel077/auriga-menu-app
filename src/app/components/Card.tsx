import { productCardType } from "../page";
import { GoStarFill } from "react-icons/go";
import Link from "next/link";

interface props {
  product: productCardType;
}

export default function Card({ product }: props) {
  return (
    <div className="md:w-64 md:h-96 w-64 h-72 sm:w-96 sm:h-96 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href={`/product/${product.slug}`}>
        <img src={product.thumbnail} alt="" className="w-full h-36" />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2 capitalize">{product.title}</h3>
          <div className="flex items-start">
            <div className="flex mb-2">{product.rating}</div>
            <div className="mt-1 text-yellow-600"><GoStarFill /></div>
            <p className="ml-2">{product.brand}</p>
          </div>
          <div className="flex text-reg font-light ">
            <p className=" mr-3">{product.price} $</p>
            <p className="mr-3 font-bold text-green-600">{product.discountPercentage}% Discount today</p>
            <p></p>
          </div>
          <p className="text-sm mt-1 font-bold">Available in Stock {product.stock} items</p>
        </div>
      </Link>
    </div>
  );
}
