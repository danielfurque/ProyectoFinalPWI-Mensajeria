import React from 'react'
import  './FilterContactosForm.css'
const FilterContactosForm = ({ search, onSearchChange }) => {

  const handleChange = (event) => {
    onSearchChange(event.target.value);
  }

  return (
    <>
      <form className="filter-contactos-form">
        <input className="filter-contactos-form-input"
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Buscar contactos..."
        />
      </form>
    </>
  )
}

export default FilterContactosForm;