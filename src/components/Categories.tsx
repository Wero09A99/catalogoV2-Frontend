import Link from "next/link"
import Image from "next/image"
import { getCategories } from "@/lib/get-categories"

export const Categories = async () => {
  const categories = await getCategories()

  return (
    <section>
            <p className="font-bold text-xl text-center w-full mb-6">All Categories</p>
    <div className="flex gap-8 flex-wrap justify-center pb-10 mt-10 ">
      {categories.map((category: any, index: number) => (
        <Link
          key={index}
          href={`/categories/${category.slug}`}
          className="flex flex-col items-center gap-2 max-w-[320px]"
        >
          <div className="relative w-80 h-80">
            <Image
              src={category.image}
              alt={category.Nombre}
              className="rounded-lg object-cover"
              fill
            />
          </div>
          <p className="font-bold text-xl">{category.Nombre}</p>
          <p className="text-md text-center">{category.Descripcion}</p>
        </Link>
      ))}
    </div>
    </section>

  )
}
