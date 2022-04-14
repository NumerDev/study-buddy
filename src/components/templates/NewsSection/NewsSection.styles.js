import styled from 'styled-components';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

export const Wrapper = styled.div`
  grid-row: 1/3;
  grid-column: 3/3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 30px 45px;
  overflow-y: scroll;
`;

export const NewsHeader = styled.h3`
  margin-right: auto;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const ArticleWrapper = styled(ViewWrapper)`
  margin: 30px 0;
  width: 100%;
  border-radius: 10px;
  max-width: unset;
  color: ${({ theme }) => theme.colors.darkGrey};

  p {
    line-height: 1.6;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const TitleWrapper = styled.div`
  padding-bottom: 10px;

  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;

  img {
    margin-left: 25px;
    max-width: 200px;
    object-fit: cover;
  }
`;
