import { query } from "./strapi";
const { STRAPI_HOST } = process.env;
export function getHomeInfo() {
    return query("inicio?populate=Imagen_titulo")
    .then(res => {
        if (!res.data) return { image: "", Titulo: "", DescripcionRich: [] };
        const { Titulo, DescripcionRich, Imagen_titulo } = res.data;
        const image = Imagen_titulo?.url ? `${STRAPI_HOST}${Imagen_titulo.url}` : "";
        return { image, Titulo, DescripcionRich };
    })
}