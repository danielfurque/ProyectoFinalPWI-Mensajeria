import React, { useState } from 'react';
import './ContactoHeader.css';
import FilterContactosForm from '../FilterContactosForm/FilterContactosForm.jsx';
import { IoCameraOutline, IoSearchOutline, IoEllipsisVertical } from 'react-icons/io5';

const ContactoHeader = ({ search, onSearchChange }) => {
  return (
    <div className='contacto-header'>
      <div className="contacto-header-items">
        <div className="contacto-header-icons">
          <IoCameraOutline />
        </div>
        <div className="contacto-header-title">WhatsApp</div>


      </div>

      <div className='contacto-filter-container'>
        <FilterContactosForm
          search={search}
          onSearchChange={onSearchChange}
        />
      </div>
      <div className="contacto-header-icons">
        <IoEllipsisVertical />
      </div>
    </div>

  )
}

export default ContactoHeader