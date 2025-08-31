import { query } from "./strapi";

const { STRAPI_HOST } = process.env;
export function getProducts({ categoryId, pageSize, page }: { categoryId: string, pageSize: number, page: number }) {
    let url = `productos?filters[categoria_de_producto][slug][$contains]=${categoryId}&populate=Imagenes`
    if(page) url += `&pagination[page]=${page}`
    if(pageSize) url += `&pagination[pageSize]=${pageSize}`
    return query(url)
        .then(res => {
            const { data, meta } = res
            const products = data.map(product => {
                const { Nombre, slug, Precio, Descripcion, Imagenes: rawImages } = product;
                const image = `${STRAPI_HOST}${rawImages[0].url}`;
                return { Nombre, slug, Precio, Descripcion, image };
            })
            return { products, pagination: meta.pagination }
        })
}