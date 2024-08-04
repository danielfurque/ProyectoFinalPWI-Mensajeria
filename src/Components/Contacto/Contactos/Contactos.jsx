import React from 'react'
import './Contactos.css'
import { Link } from 'react-router-dom'

const Contactos = ({ item }) => {
  const lastMessage = item.mensajes[item.mensajes.length - 1];
  return (
    <Link className='contact-container' to={`/chat/${item.id}`}>
      <div key={item.id} className='contact-item'>
        <div className='contact-image'>
          <img className='thumbnail' src={`/assets/${item.thumbnail}`} alt="" />

        </div>
        <div className='contact-info'>
          <div className='contact-message'>
            <div className='contact-nombre'>

              <span>{item.nombre}</span>

            </div>
            <div className='contact-hour'>
              <span>{lastMessage.hour}</span>
            </div>

          </div>
          <div className='contact-lastmessage'>
            <span>{lastMessage.text}</span>
          </div>

        </div>
      </div>
    </Link>


  )
}

export default Contactos