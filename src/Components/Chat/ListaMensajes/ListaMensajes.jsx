import React from 'react';
import './ListaMensajes.css';
import Mensaje from '../Mensaje/Mensaje.jsx';


const ListaMensajes = ({mensajes}) => {
  return (
    <div className="lista-mensajes">
      <Mensaje mensajes={mensajes} />
    </div>
  );
}

export default ListaMensajes;