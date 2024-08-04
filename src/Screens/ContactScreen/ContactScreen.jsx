import React, { useState } from 'react'
import './ContactScreen.css'
import ListaContactos from '../../Components/Contacto/ListaContactos/ListaContactos.jsx'
import ContactoFooter from '../../Components/Contacto/ContactoFooter/ContactoFooter.jsx'
import ContactoHeader from '../../Components/Contacto/ContactoHeader/ContactoHeader.jsx'

const ContactScreen = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (searchString) => {
    setSearch(searchString);
  };


  return (
    <div className='contact-screen'>
      < ContactoHeader search={search} onSearchChange={handleSearchChange} />
      < ListaContactos search={search} />
      < ContactoFooter />

    </div>


  )
}

export default ContactScreen