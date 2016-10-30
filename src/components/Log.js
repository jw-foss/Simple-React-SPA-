import React from 'react';
import { Link } from 'react-router';

export default class Log extends React.Component {
    render() {
        const { code, title, date, content, author } = this.props
        const dateClass = {
            float: 'right',
            color: 'lightblue'
        }

        const authorClass = {
            color: 'red'
        }
        //insert raw html MarkUps
        function createMarkUp() {
            return { __html: content }
        }
        return (
            <div>
                <section className="article">
                    <h2> <Link to={'logs/' + code}><span>{title}</span></Link></h2>
                    <span style={authorClass}>{author}</span>  <span style={dateClass}>{date}</span>
                    <p dangerouslySetInnerHTML={createMarkUp()}></p>
                </section>
            </div>
        )
    }
}