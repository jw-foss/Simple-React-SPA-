import React from 'react';
import articles from '../sources/articles';
import Article from './Article';

class Archives extends React.Component {
  render() {

    return (
      <div>
        {articles.map((val) => <Article
          key={val.code}
          content={val.content}
          title={val.title}
          code={val.code}
          author={val.author}
          date={val.date} />)}
      </div>
    );
  }
}

Archives.defaultProps = {
};

export default Archives;
