import React, { useState, useEffect } from "react";
import "./ListaContactos.css";
import useContactos from '../../../Hooks/useContactos.js';
import Contactos from "../Contactos/Contactos.jsx"

const ListaContactos = ({ search }) => {
  const { contactos, loading } = useContactos();
  const [updatedContactos, setUpdatedContactos] = useState([]);

  useEffect(() => {
    if (!loading) {
      <p> Cargando lista de contactos...</p>
      if (search) {
        setUpdatedContactos(contactos.filter(contacto => contacto.nombre.toLowerCase().includes(search.toLowerCase())));
      } else {
        setUpdatedContactos(contactos);
      }
    }
  }, [search, loading]);

  return (
    <div className="contact-list">
      {updatedContactos.map((contacto) => (
        <Contactos
          key={contacto.id}
          item={contacto}
        />
      ))}
    </div>
  );
};

export default ListaContactos;