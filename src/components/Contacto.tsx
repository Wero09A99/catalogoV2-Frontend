import { getContactInfo } from "@/lib/get-contact-info"


export const Contact =  async () => {
    const { Correo, Numero_de_telefono_1, Numero_de_telefono_2 } = await getContactInfo();
    return (
        <div>
        <h1>{Correo}</h1>
        <h2>{Numero_de_telefono_1}</h2>
        <h3>{Numero_de_telefono_2}</h3>
        </div>

    )
}