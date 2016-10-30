import React from 'react'
export default class Aboutme extends React.Component {
    render() {
        return (
            <div className="aboutme">
                <h2>About Me</h2>
                <ul>
                    <li><i className="fa fa-user"></i> <strong>Name: <span>Jeremy</span></strong></li>
                    <li><i className="fa fa-mars"></i> <strong>Age: <span>21</span></strong></li>
                    <li><i className="fa fa-university"></i> <strong>College: <span>GXUniversity XingJian college</span></strong></li>
                    <li><i className="fa fa-envelope-o"></i> <strong>Contact: <span>Jeremy577@icloud.com</span></strong></li>
                    <li><strong>&nbsp;&nbsp;&nbsp;&nbsp;Will of Job: <span>FontEnd Engineer</span></strong></li>
                </ul>
            </div>
        )
    }
}