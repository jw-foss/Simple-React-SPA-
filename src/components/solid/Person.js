import React from 'react'

export default class Person extends React.Component {
    //handleMouseEnter
    handleEnter(key) {
        const qq = this.refs.qq
        const weixin = this.refs.weixin
        if (key === 1) {
            qq.style.display = 'inline-block'
        } else {
            weixin.style.display = 'inline-block'
        }
    }
    //handleMouseLeave
    handleLeave(key) {
        const qq = this.refs.qq
        const weixin = this.refs.weixin
        if (key === 1) {
            qq.style.display = 'none'
        } else {
            weixin.style.display = 'none'
        }
    }
    render() {
        return (
            <div className="person">
                <div className="img">
                    <img src="../images/jere.JPG" alt="" /> <br />
                    <div className="icon-bars">
                        <br />
                        <i className='fa fa-weibo' aria-hidden="true"></i>
                        <i className='fa fa-qq' aria-hidden="true"
                            key={'qq'}
                            onMouseEnter={this.handleEnter.bind(this, 1)}
                            onMouseLeave={this.handleLeave.bind(this, 1)}    ></i>
                        <br />
                        <i className='fa fa-weixin' aria-hidden="true"
                            key={'weixin'}
                            onMouseEnter={this.handleEnter.bind(this, 2)}
                            onMouseLeave={this.handleLeave.bind(this, 2)}   ></i>
                        <i className='fa fa-linkedin' aria-hidden="true"></i>
                    </div>
                    <div className="QR-code">
                        <img src="../images/QR1.JPG" alt="" className="QR1" ref={'qq'} />
                        <img src="../images/QR2.JPG" alt="" className="QR2" ref={'weixin'} />
                    </div>
                </div>
            </div>
        )

    }
}