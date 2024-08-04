import React from 'react';
import './Mensaje.css';

const Mensaje = ({ mensajes }) => {
  return (
    <div className="mensaje-container">
      {mensajes.map((mensaje) => (
        <div key={mensaje.id} className={`mensaje-item ${mensaje.author !== 'yo' ? '' : 'derecha'}`}>
          <div className="mensaje-bloque">
            <span className="mensaje-texto">{mensaje.text}</span>
          </div>
          <div className='mensaje-detalles'>
          <div className="mensaje-day">{mensaje.day}</div>
            <div className="mensaje-status">{mensaje.status}</div>
            <div className="mensaje-hora">{mensaje.hour}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mensaje;
