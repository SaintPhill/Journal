import React from 'react'
import styled from 'styled-components'

const articles = [
    {
        author: 'Den Abramov',
        title: 'Making Sense of React Hooks',
        text: 'Hooks are an experimental proposal to React. You don’t need to learn about them right now. Also, note that this post contains my personal opinions and doesn’t necessarily reflect the positions of the React team.',
        id: 0
    },
    {
        author: 'Mel.fm',
        title: 'В Амурской области на ученическом слёте школьники выиграли три тонны картофеля',
        text: 'Школьники из Бурейского района Амурской области выиграли главный приз областного слёта ученических производственных бригад «АгроСТАРТап». Как сообщает gzt-sv.ru, наградой для детей стали три тонны семян элитного картофеля. Бригада победителей называлась «Муравьи».',
        id: 1
    }];

const ArticleWrapper = styled.div`
    display: flex;
    margin: auto;
    width: 50%;
    flex-direction: column;
    align-items: center;
`;

const SingleArticle = ({match}) => {
    console.log(match.params.id);
  return (
      <div>
          <h3>123123</h3>
      </div>
  )
};

export default SingleArticle