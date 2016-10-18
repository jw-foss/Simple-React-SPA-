import React from 'react';
import articles from '../sources/articles';
import Article from './Article';

class Archives extends React.Component {
	 render() {
    
    return (
      <div>
        {articles.map( (value) => <Article key={value.code} context={value.content} title = {value.title} code={value.code} /> )}
      </div>
    );
  }
}

Archives.defaultProps = {
};

export default Archives;
