import React from 'react'
import styled from 'styled-components'
import SingleArticle from "./SingleArticle";
import ArticleList from "./ArticleList";
import {Route} from "react-router-dom";

const ArticlesListWrapper = styled.div`
    display: flex;
    margin: auto;
    width: 50%;
    flex-direction: column;
    align-items: center;
`;

const Main = () => {
  return (
      <ArticlesListWrapper>
          <Route path={`/`} exact component={ArticleList} />
          <Route path={'/:id'} component={SingleArticle} />
      </ArticlesListWrapper>
  )
};

export default Main