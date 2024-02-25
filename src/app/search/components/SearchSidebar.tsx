import { title } from "process";

export default function SearchSidebar() {
    {
        title,
        brand,
        searchParams,
      }: {
        title: title;
        brand: brand;
        searchParams: { title?: string; brand?: string; category?: string };
      }
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Location</h1>
        <div className="flex flex-col">
          {title.map((location: Location) => (
            <Link
              href={{
                pathname: "/search",
                query: { ...searchParams, city: location.name },
              }}
              className="font-light text-reg capitalize"
            >
              {location.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Region</h1>
        <div className="flex flex-col">
          {brand.map((region: Region) => (
            <Link
              href={{
                pathname: "/search",
                query: { ...searchParams, region: region.name },
              }}
              className="font-light text-reg capitalize"
            >
              {region.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {price.map(({ price, label, className }) => (
            <Link
              href={{
                pathname: "/search",
                query: { ...searchParams, price },
              }}
              className={className}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
