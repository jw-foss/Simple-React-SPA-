import React from 'react';
import { Link } from 'react-router';

export default class Article extends React.Component {
    render() {
        const dateClass = {
            marginLeft: '20px',
            color: 'lightblue'
        }

        const authorClass = {
            color: 'red'
        }
        return (

            <div>
                <section className="article">
                    <h2> <Link to={'archives/' + this.props.code}> {this.props.title}</Link></h2>
                    <span style={authorClass}>{this.props.author}</span>  <span style={dateClass}>{this.props.date}</span>
                    <p>{this.props.context}</p>
                </section>
            </div>
        )
    }
}