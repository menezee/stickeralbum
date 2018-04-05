import React from 'react'
import PropTypes from 'prop-types'

import Batman from '../images/batman.jpg'
import Robin from '../images/robin.jpg'
import Riddler from '../images/riddler.jpg'

const imageMap = {
    Batman,
    Robin,
    Riddler
}

const imageStyle = {
    height: '250px',
    width: '200px'
}

const cardStyle = {
    height: '280px',
    width: '200px',
    border: '1px solid black',
    margin: '3px',
    display: 'flex',
    flexDirection: 'column'
}

export const Sticker = props => (
    <div style={cardStyle}>
        <img style={imageStyle} src={imageMap[props.image]} alt='sticker' />
        { props.image }
    </div>
)

Sticker.propTypes = {
    image: PropTypes.string.isRequired
}
