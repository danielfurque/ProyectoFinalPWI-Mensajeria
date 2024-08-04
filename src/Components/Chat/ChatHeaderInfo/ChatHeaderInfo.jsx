import React from 'react';
import './ChatHeaderInfo.css';
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoDeviceCameraVideo } from "react-icons/go";
import { MdInfoOutline } from 'react-icons/md';

const ChatHeaderInfo = ({contacto}) => {
  return (
    <div className='header-container'>
      <Link to={'/'}>
        <div className='header-back-icon'>
          <IoIosArrowBack />
        </div>
      </Link>
      <div className='header-image'>
        <img className='thumbnail' src={`/assets/${contacto.thumbnail}`} alt="" />
      </div>
      <div className='header-info'>
        <div className='header-nombre'>
          <span>{contacto.nombre}</span>
        </div>
        <div className='header-estado'>
          <span>{contacto.ultima_conexion}</span>
        </div>
      </div>
      <div className='header-icons-container'>
        <div className='header-icons'>
          <GoDeviceCameraVideo />
        </div>
        <div className='header-icons'>
          <BsFillTelephoneFill />
        </div>
        <div className='header-icons'>
        <Link to={`/info/${contacto.id}`}>
         <div className='info-icon'>
          <MdInfoOutline />
          </div>
        </Link>
      

        </div>
        </div>
    </div>
  )
}

export default ChatHeaderInfo