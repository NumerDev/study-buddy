import React, { useState, useEffect } from 'react';
import { ArticleWrapper, Wrapper } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';
import { NewsHeader, TitleWrapper, ContentWrapper } from './NewsSection.styles';
import axios from 'axios';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `
        {
          allArticles {
            id
            title
            category
            content
            image {
              url
            }
          }
        }`,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
          withCredentials: false,
        }
      )
      .then(({ data: { data } }) => setArticles(data.allArticles))
      .catch((e) => setError("Sorry, we coundn't fetch the articles :("));
  }, []);

  return (
    <Wrapper>
      <NewsHeader>University feed section</NewsHeader>

      {articles.length > 0 ? (
        articles.map(({ title, category, content, image }) => (
          <ArticleWrapper key={title}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article image" /> : null}
            </ContentWrapper>
            <Button>Read more</Button>
          </ArticleWrapper>
        ))
      ) : (
        <ArticleWrapper>
          <NewsHeader>{error ? error : 'Loading...'}</NewsHeader>
        </ArticleWrapper>
      )}
    </Wrapper>
  );
};

export default NewsSection;
