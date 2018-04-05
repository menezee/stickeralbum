import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Sticker } from '../components'

const style = {
    height: '580px',
    width: '832px',
    backgroundColor: 'lightblue',
    display: 'flex',
    flexWrap: 'wrap'
}

class Album extends Component {

    render() {
        const { stickers } = this.props
        const stickerList = stickers.map((sticker, index) => (
            <Sticker key={index} image={sticker} />
        ))

        return (
            <div style={style}>
                {stickerList}
            </div>
        )
    }
}

Album.propTypes = {
    stickers: PropTypes.array.isRequired
}

export default Album
