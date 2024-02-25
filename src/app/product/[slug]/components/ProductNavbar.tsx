import Link from 'next/link'

export default function ProductNavbar({ slug}: { slug: string }) {
  return (
    <nav className="flex text-reg border-b pb-2">
    <Link href={`/`}  className="mr-7">
      Overview
    </Link>
    <Link href={`/product/${slug}`} className="mr-7">
      Detail
    </Link>
  </nav>
  )
}
