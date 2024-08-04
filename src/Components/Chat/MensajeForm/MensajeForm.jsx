import React, { useState } from 'react';
import './MensajeForm.css';
import { IoSend, IoHappyOutline } from 'react-icons/io5'; 

const MensajeForm = ({ onSend }) => {
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (mensaje.trim()) {
      onSend(mensaje);
      setMensaje('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mensaje-form">
      <IoHappyOutline className="icono-emojis" />  
      <input
        className="input-mensaje"
        type="text"
        value={mensaje}
        onChange={(event) => setMensaje(event.target.value)}
        placeholder="Escribe un mensaje..."
      />
      <button type="submit" className="send-button">
        <IoSend />
      </button>
    </form>
  );
};

export default MensajeForm;
