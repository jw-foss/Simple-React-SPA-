import React from 'react'
import articles from '../sources/articles'
import { Card } from 'antd'
import { Link } from 'react-router'
class Archives extends React.Component {
  render() {
    function createMarkUp(val) {
      return { __html: val.content }
    }
    return (
      <div>
        {articles.map((val) =>
          <Card title={<Link to={'archives/' + val.code}>{val.title}</Link>}
            extra={val.author}
            style={{ width: 600,
              margin: '15px auto',
            height: '180' }}>
            <p dangerouslySetInnerHTML={createMarkUp(val)}></p>
          </Card>
        )}
      </div>
    );
  }
}

Archives.defaultProps = {
};

export default Archives;
