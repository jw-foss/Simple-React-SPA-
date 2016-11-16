import React from 'react'
import Load from 'react-loading'

export default class Loading extends React.Component {
    render() {
        const loadingStyle = {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'

        }
        return (
            <div style={loadingStyle}>
                <Load type='bars' color="#000"/>
            </div>
        )
    }
}