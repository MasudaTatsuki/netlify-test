import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';

const NewsList = () => {
  // GraphQLクエリを使用してデータを取得
  const data = useStaticQuery(graphql`
    query {
      allMicrocmsNews(sort: { fields: publishedAt, order: DESC }) {
        nodes {
          id
          title
          text
          publishedAt(formatString: "YYYY.DD.MM hh:mm") 
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>お知らせ一覧</h1>
      <ul>
        {data.allMicrocmsNews.nodes.map(news => (
          <li key={news.id}>
            {/* {news.eyecatch && news.eyecatch.url && (
              <img
                src={news.eyecatch.url}
                alt={news.title}
                style={{ width: news.eyecatch.width, height: news.eyecatch.height }}
              />
            )} */}
            <h2>{news.title}</h2>
            <p>{news.text}</p>
            <p>{news.publishedAt}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default NewsList;
