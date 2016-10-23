import React from 'react'
export default class Aboutme extends React.Component {
    render() {
        return (
            <div className="aboutme">
                <h2>About me</h2>
                <ul>
                    <li><i className="fa fa-user"></i> <strong>Name: <span>Jeremy Wu</span></strong></li>
                    <li><i className="fa fa-mars"></i> <strong>Age: <span>21</span></strong></li>
                    <li><i className="fa fa-university"></i> <strong>University: <span>Guangxi University</span></strong></li>
                    <li><i className="fa fa-envelope-o"></i> <strong>Contact: <span>Jeremy577@icloud.com</span></strong></li>
                    <li><strong>Will of job: <span>Front End Engineer</span></strong></li>
                </ul>
            </div>
        )
    }
}