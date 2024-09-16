import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import '../blog-list.css';
import '../style.css';

const BlogList = () => {
  // GraphQLクエリを使用してデータを取得
  const data = useStaticQuery(graphql`
    query {
      allMicrocmsBlogs(sort: { fields: publishedAt, order: DESC }) {
        nodes {
          id
          title
          content
          category {
            name
          }
          publishedAt(formatString: "YYYY.DD.MM hh:mm") 
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>ブログ一覧</h1>
      <ul className="blog-list">
        {data.allMicrocmsBlogs.nodes.map(blog => (
          <li key={blog.id} className="blog-item">
            {/* {blog.eyecatch && blog.eyecatch.url && (
              <img
                src={blog.eyecatch.url}
                alt={blog.title}
                className="blog-image" 
              />
            )} */}
            <h2>{blog.title}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
            <p>{blog.category.name}</p>
            <p>{blog.publishedAt}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default BlogList;
