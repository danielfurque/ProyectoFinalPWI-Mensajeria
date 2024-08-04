import React from 'react'
import './ContactoInfo.css'
import { useParams } from 'react-router-dom'
import useContactos from '../../../Hooks/useContactos'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import { IoEllipsisVertical,IoLockClosed,IoNotificationsSharp   } from 'react-icons/io5'
import { MdOutlinePhone, MdOutlineVideocam, MdSearch, MdAccessTimeFilled   } from "react-icons/md";
import { AiOutlinePicture } from "react-icons/ai";
import { PiLockLaminatedFill } from "react-icons/pi";
import { FaStar  } from "react-icons/fa";





const ContactoInfo = () => {
  const { id } = useParams()
  const { contactos, loading } = useContactos()
  const contacto = contactos.find(contacto => contacto.id === Number(id))
  if(loading){
    return (
      <>
        <h2>Cargando Información del contacto</h2>
      </>
    )
  } else if (!contacto) {
    return (
      <>
        <h2>ERROR - URL no encontrada</h2>
        <p>Ups... ha ocurrido un problema, la URL a la que estas intentando ingresar no existe </p>
      </>
    )

  }



  return (
<div className="contact-info-container">
      <div className="info-header">
        <Link to={`/chat/${contacto.id}`}>
          <IoIosArrowBack className="arrow-icon" />
        </Link>
        <div className="info-details">
          {contacto.thumbnail && <img className="thumbnail" src={`/assets/${contacto.thumbnail}`} alt="" />}
          <div className="contact-details">
            <div className="contact-name">{contacto.nombre}</div>
          </div>

        </div>
        <IoEllipsisVertical className="info-icons" />
      </div>
      <div className="info-actions">
      <div className="action-icon-container"><MdOutlinePhone className="info-icons" /><p>Llamar</p></div>
      <div className="action-icon-container"><MdOutlineVideocam className="info-icons" /><p>Video</p></div>
      <div className="action-icon-container"><MdSearch className="info-icons" /><p>Buscar</p></div>
      </div>
      <div className="decorado">
        <div className="item-information"><IoNotificationsSharp  className="info-icons" /><p>Notificaciones</p></div>
        <div className="item-information"><AiOutlinePicture className="info-icons" /><p>Multimedia, links y documentos</p></div>
        <div className="item-information"><FaStar  className="info-icons" /><p>Mensajes destacados</p></div>
        <div className="item-information"><MdAccessTimeFilled  className="info-icons" /><p>Mensajes temporales <span >Desactivados</span></p></div>
        <div className="item-information"><PiLockLaminatedFill className="info-icons" /><p>Restringir chat<span >Restringe y oculta este chat en este dispositivo</span></p> </div>
        <div className="item-information"><IoLockClosed   className="info-icons"/><p>Cifrado<span >Los mensajes y las llamadas están cifrados de extremo a extremo. Toca para verificarlo</span></p></div>

      </div>
    </div>
  )
}

export default ContactoInfo