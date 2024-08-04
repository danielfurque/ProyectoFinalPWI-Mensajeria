import React from 'react'
import './ContactoFooter.css'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineChat, MdGroups } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";

const ContactoFooter = () => {
  return (

    <div className='contacto-footer'>

      <div className='contacto-footer-icons'>
        < BsFillTelephoneFill />
        Llamadas
      </div>
      <div className='contacto-footer-icons'>
        <MdGroups />
        Comunidades
      </div>

      <div className='contacto-footer-icons'>
        <MdOutlineChat />
        Chats
      </div>

      <div className='contacto-footer-icons'>
        <IoSettingsSharp />
        Ajustes
      </div>
    </div>
  )
}

export default ContactoFooter