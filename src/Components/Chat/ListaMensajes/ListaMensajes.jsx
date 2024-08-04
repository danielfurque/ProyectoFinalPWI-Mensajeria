import React from 'react';
import './ListaMensajes.css';
import { useParams } from 'react-router-dom';
import useContactos from '../../../Hooks/useContactos.js';
import Mensaje from '../Mensaje/Mensaje.jsx';
import MensajeForm from '../MensajeForm/MensajeForm.jsx';
import { useState, useEffect } from 'react';

const ListaMensajes = ({mensajes}) => {
  return (
    <div className="lista-mensajes">
      <Mensaje mensajes={mensajes} />
    </div>
  );
}

export default ListaMensajes;