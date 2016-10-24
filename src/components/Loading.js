import React from 'react'
import Load from 'react-loading'

export default class Loading extends React.Component {
    render() {
        const loadingStyle = {
            position: 'fixed',
            left: '40%',
            top: '40%'
        }
        return (
            <div style={loadingStyle}>
                <Load type='bars' color='#000' />
            </div>
        )
    }
}