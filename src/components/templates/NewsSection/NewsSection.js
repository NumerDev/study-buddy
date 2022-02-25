import React from 'react';
import { ArticleWrapper, Wrapper } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';
import { NewsHeader, TitleWrapper } from './NewsSection.styles';

const NewsSection = () => {
  return (
    <Wrapper>
      <NewsHeader>University feed section</NewsHeader>
      <ArticleWrapper>
        <TitleWrapper>
          <h3>New computers for all lecturers</h3>
          <p>Staff news</p>
        </TitleWrapper>
        <p>
          Amet, diam, viverra nec pretium in nunc a. Pellentesque venenatis fames molestie non. Nulla neque, a a id elementum pretium aliquam. In
          turpis sem vestibulum ut in ut. Fringilla orci, condimentum tellus leo nunc, vitae eu. Diam euismod enim integer facilisi sed. Pretium
          hendrerit quis egestas eget at magna ac commodo volutpat.
        </p>
        <Button isBig>Read more</Button>
      </ArticleWrapper>
    </Wrapper>
  );
};

export default NewsSection;
