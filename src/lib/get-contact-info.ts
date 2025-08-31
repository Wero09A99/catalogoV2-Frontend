import { query } from "./strapi";
export function getContactInfo() {
    return query("contacto")
    .then(res => {
        const {Correo, Numero_de_telefono_1, Numero_de_telefono_2 } = res.data;
    return { Correo, Numero_de_telefono_1, Numero_de_telefono_2} 
})
}