import React from 'react'
import styled from 'styled-components'
import {articles} from "../../redux/reducers";

const ArticleWrapper = styled.div`
    padding: 20px;
`;

export interface ItemType {
    title: string
    text: string
    name: string
    id: number
}

const SingleArticle = (props: {match: {params: {id: string}}, articles: ItemType[]}) => {
    const {match, articles} = props;
    // @ts-ignore
    const storageArticles = JSON.parse(localStorage.getItem("articles")) || {articles: []};
    const article = [...articles, ...storageArticles.articles].filter((article:ItemType) => article.id === parseFloat(match.params.id));

  return (
      <ArticleWrapper>
          <h1>{article[0].title}</h1>
          <p>{article[0].text}</p>
          <p>{article[0].name}</p>
      </ArticleWrapper>
  )
};

export default SingleArticle

