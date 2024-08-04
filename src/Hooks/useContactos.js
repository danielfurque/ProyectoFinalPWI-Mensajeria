import { fetchContactos } from "../Fetching/contactosFetching";
import { useState, useEffect } from "react";


const useContactos = () => {
    const [contactos, setContactos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const obtenerContactos = async () => {
            try {
                const contactos = await fetchContactos()
                setContactos(contactos);
            } catch (error) {
                console.error("ERROR!!!, no se obtuvo la lista de contactos", error);
            } finally {
                setLoading(false)
            }
        }
        obtenerContactos();
    }, []);

    return { contactos, loading }
}

export default useContactos