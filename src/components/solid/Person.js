import React from 'react'
export default class Person extends React.Component {

    render() {
        return (
            <div className="person">
                <div className="img">
                    <img src="../images/20150730163111_YZT5S.png" alt="" /> <br />
                    <div className="icon-bars">
                        <br />
                        <i className='fa fa-weibo ' aria-hidden="true"
                            ></i>
                        <i className='fa fa-qq ' aria-hidden="true"
                            ></i>
                        <i className='fa fa-weixin ' aria-hidden="true"
                            ></i>
                        <i className='fa fa-linkedin ' aria-hidden="true"
                            ></i>
                    </div>
                </div>
            </div>
        )

    }
}