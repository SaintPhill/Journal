import React from 'react'
import {Route} from "react-router-dom";
import ArticleList from '../components/ArticleList/container/ActicleList'
import SingleArticle from "./SingleArticle/container/SingleArticle";

const Main = () => {
  return (
      <>
          <Route path={`/`} exact render={(props) => <ArticleList {...props}/>} />
          <Route path={'/article/:id'} exact render={(props) => <SingleArticle {...props}/>} />
      </>
  )
};

export default Main