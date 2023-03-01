import React from 'react'
import PropTypes from 'prop-types'

export const DogImage = ({ url }) => {
  return <img src={url} alt="犬" className="dogImg" />
}

DogImage.propTypes = {
  url: PropTypes.string.isRequired,
}
