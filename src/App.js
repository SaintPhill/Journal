import React from 'react';
import Header from "./components/Header";
import { Route } from "react-router-dom";
import Main from "./components/Main";


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

function App() {
  return (
          <div className="App">
              <Header/>
              <Route
                  path="/" exact
                  render={(props) => <Main {...props} articles={articles}/>} />

          </div>
  );
}

export default App;
