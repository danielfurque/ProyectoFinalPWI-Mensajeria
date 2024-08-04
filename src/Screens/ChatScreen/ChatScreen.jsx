import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useContactos from '../../Hooks/useContactos.js';
import MensajeForm from '../../Components/Chat/MensajeForm/MensajeForm.jsx';
import ChatHeaderInfo from '../../Components/Chat/ChatHeaderInfo/ChatHeaderInfo.jsx';
import ListaMensajes from '../../Components/Chat/ListaMensajes/ListaMensajes.jsx';

const ChatScreen = () => {
    const { id } = useParams();
    const { contactos, loading } = useContactos();
    const [updatedMensajes, setUpdatedMensajes] = useState([]);

    useEffect(() => {
        if (!loading) {
            const contacto = contactos.find(contacto => contacto.id === Number(id));
            if (contacto) {
                setUpdatedMensajes(contacto.mensajes);
            }
        }
    }, [loading, contactos, id]);

    if (loading) {
        return <p>Cargando mensajes...</p>;
    }

    const contacto = contactos.find(contacto => contacto.id === Number(id));

    if (!contacto) {
        return (
            <>
                <h2>ERROR - URL no encontrada</h2>
                <p>Ups... ha ocurrido un problema, la URL a la que estas intentando ingresar no existe </p>
            </>
        );
    }

    const handleSend = (nuevoMensaje) => {
        const nuevoMensajeObj = {
            author: "yo",
            text: nuevoMensaje,
            hour: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
            id: `${updatedMensajes.length + 1}`,
            status: "entregado",
            day: "hoy"

        };

        const nuevosMensajes = [...updatedMensajes, nuevoMensajeObj];
        setUpdatedMensajes(nuevosMensajes);
    };

    return (
        <div>
            <ChatHeaderInfo contacto={contacto} />
            <div className="lista-mensajes">
                <ListaMensajes mensajes={updatedMensajes} />
            </div>
            <MensajeForm onSend={handleSend} />
        </div>
    );
}

export default ChatScreen;