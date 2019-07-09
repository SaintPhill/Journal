import React from 'react'
import {Link} from "react-router-dom";
import styled from 'styled-components'

const ListWrapper = styled.div`
    padding: 15px;
`;

export interface ItemType {
    title: string
    text: string
    name: string
    id: number
}

const ArticleList = ({articles}: { articles: ItemType[] }) => {
    return (
        <ListWrapper>
            <ul>
                {articles.map((article:any) => <li><Link to={`/article/${article.id}`}>{article.title} ({article.name})</Link></li>)}
            </ul>
        </ListWrapper>
    )
};

export default ArticleList