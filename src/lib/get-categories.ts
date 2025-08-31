import { query } from "./strapi";

const  { STRAPI_HOST} = process.env;

export function getCategories () {
    return query("categoria-de-productos?fields[0]=Nombre&fields[1]=slug&fields[2]=Descripcion&populate[Imagen][fields][0]=url")
    .then(res => {
        return res.data.map(category => {
            const { Nombre, slug, Descripcion, Imagen: rawImae } = category;
            const image = `${STRAPI_HOST}${rawImae.url}`;
            return {Nombre, slug, Descripcion, image }

        }
        )
    })
}