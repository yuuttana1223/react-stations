import React from 'react'
import PropTypes from 'prop-types'

export const BreedsSelect = ({ breeds, selectedBreed, onChange }) => {
  return (
    <select value={selectedBreed} onChange={onChange} className="dogSelect">
      {breeds?.map(breed => (
        <option value={breed} key={breed}>
          {breed}
        </option>
      ))}
    </select>
  )
}

BreedsSelect.propTypes = {
  breeds: PropTypes.arrayOf(PropTypes.string),
  selectedBreed: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}
