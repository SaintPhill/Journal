import React from 'react';
import Header from "./components/Header";
import { Route } from "react-router-dom";
import Main from "./components/Main";
import styled from "styled-components";
import NewArticleForm from "./components/NewArticleForm.tsx";


const articles = [
    {
        author: 'Den Abramov',
        title: 'Making Sense of React Hooks',
        text: 'Hooks are an experimental proposal to React. You don’t need to learn about them right now. Also, note that this post contains my personal opinions and doesn’t necessarily reflect the positions of the React team.'
    },
    {
        author: 'Mel.fm',
        title: 'В Амурской области на ученическом слёте школьники выиграли три тонны картофеля',
        text: 'Школьники из Бурейского района Амурской области выиграли главный приз областного слёта ученических производственных бригад «АгроСТАРТап». Как сообщает gzt-sv.ru, наградой для детей стали три тонны семян элитного картофеля. Бригада победителей называлась «Муравьи».'
    }];

const Wrapper = styled.div`
    display: flex;
    margin: auto;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 100vh;
    background-color: aliceblue;
`;

let obj = {
    item1: 1,
    item2: [123, "two", 3.0],
    item3:"hello"
};

let serialObj = JSON.stringify(obj); //сериализуем его

console.log(JSON.parse(serialObj));

function App() {
  return (
          <Wrapper>
              <Header/>
              <Route path={'/'} component={Main} />
              <Route path={'/new-article'} component={NewArticleForm} />
          </Wrapper>
  );
}

export default App;
