import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'

import { Sticker } from '../components'
import StickerListAdapter from '../adapters/stickerListAdapter'
import FirebaseService from '../services/FirebaseService'

const style = {
    height: '580px',
    width: '832px',
    backgroundColor: 'lightblue',
    display: 'flex',
    flexWrap: 'wrap'
}

const buttonStyle1 = {
    height: '100%',
    width: '50%',
    backgroundColor: 'black',
    color: 'red',
    fontWeight: '500',
    fontSize: '25px'
}

const buttonStyle2 = {
    height: '100%',
    width: '50%',
    backgroundColor: 'green',
    color: 'pink',
    fontWeight: '500',
    fontSize: '25px'
}

class Album extends Component {

    render() {
        const { firebaseState } = this.props
        const stickerListData = StickerListAdapter(firebaseState)
        const onclick = () => {
            const newSticker = ['Batman', 'Riddler', 'Robin'][Math.floor(Math.random() * Math.floor(3))]
            stickerListData ?
                FirebaseService({
                    stickers: [
                        ...stickerListData,
                        newSticker
                    ]
                }) :
                FirebaseService({
                    stickers: [
                        newSticker
                    ]
                })
        }

        const clearData = () => {
            FirebaseService({
                stickers: []
            })
        }

        const stickerList = stickerListData ? stickerListData.map((sticker, index) => (
            <Sticker key={index} image={sticker} />
        )) : 'LOADING'

        return (
            <div>
                <div style={{height: '60px'}}>
                    <button style={buttonStyle1} type='text' onClick={onclick}> insert data </button>
                    <button style={buttonStyle2} type='text' onClick={clearData}> clear data </button>
                </div>
                <div style={style}>
                    {stickerList}
                </div>
            </div>
        )
    }
}

Album.propTypes = {
    stickers: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    stickers: state.AlbumReducer.stickers,
    firebaseState: state.firebase.data
})

// export default connect(mapStateToProps)(Album)
export default compose(
    firebaseConnect([
        '/' // { path: '/todos' } // object notation
    ]),
    connect(mapStateToProps)
)(Album)