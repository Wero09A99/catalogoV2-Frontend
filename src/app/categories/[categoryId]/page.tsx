import { Pagination } from "@/components/Pagination";
import { getProducts } from "@/lib/get-products";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";



export default async function CategoryPage({
    params,
    searchParams
}: {
    params: { categoryId: string }
    searchParams: { page?: string }
}) {
    const { categoryId } = await params;
    const resolvedSearchParams = await searchParams;
    const PAGE_SIZE = 1;

    // Leer el parámetro page de la URL
    const currentPage = parseInt(resolvedSearchParams.page || '1', 10);

    // Obtener productos con la página actual
    const { products, pagination } = await getProducts({
        categoryId,
        page: currentPage,
        pageSize: PAGE_SIZE
    });


    return (
        <section className="w-full flex flex-col items-center gap-6 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Products in {categoryId}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product: any) => {
                    const imageSrc = product.image ?? "/placeholder.png";

                    return (
                        <div key={product.slug} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
                            <Image
                                src={imageSrc}
                                alt={product.Nombre}
                                width={400}
                                height={500}
                                className="w-full h-48 object-cover mb-4 rounded-md"
                            />
                            <h2 className="text-xl font-semibold">{product.Nombre}</h2>
                            {typeof product.Descripcion === "string" ? (
                                <p className="text-gray-600 line-clamp-2">{product.Descripcion}</p>
                            ) : (
                                <BlocksRenderer content={product.Descripcion} />
                            )}
                            <p className="text-lg font-bold mt-2">${product.Precio}</p>
                        </div>
                    );
                })}
                {/* Pasar las props correctas al componente Pagination */}

            </div>
            <Pagination
                page={pagination.page}
                pageSize={pagination.pageSize}
                pageCount={pagination.pageCount}
                total={pagination.total}
            />
        </section>
    )
}