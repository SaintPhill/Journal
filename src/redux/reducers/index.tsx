import {AppActions} from "../actions";
import {ADD_ARTICLE} from "../constants";
import {ActicleState} from '../types'
import {combineReducers} from "redux";

const initState =  [
    {
        title: 'Making Sense of React Hooks',
        text: 'Hooks are an experimental proposal to React. You don’t need to learn about them right now. Also, note that this post contains my personal opinions and doesn’t necessarily reflect the positions of the React team.',
        name: 'Den Abramov',
        id: 0
    },
    {
        title: 'В Амурской области на ученическом слёте школьники выиграли три тонны картофеля',
        text: 'Школьники из Бурейского района Амурской области выиграли главный приз областного слёта ученических производственных бригад «АгроСТАРТап». Как сообщает gzt-sv.ru, наградой для детей стали три тонны семян элитного картофеля. Бригада победителей называлась «Муравьи».',
        name: 'Mel.fm',
        id: 1
    }];
let articleIndex = 2;

function addToLocalStorage(action: AppActions) {
    if(localStorage.getItem('articles')) {
        // @ts-ignore
        const currentStorage = JSON.parse(localStorage.getItem("articles"));
        const newStorage = {
            ...currentStorage,
            articles:
                [...currentStorage.articles,
                    {
                        title: action.payload.title,
                        text: action.payload.text,
                        name: action.payload.name,
                        id: articleIndex++
                    }
                ]
        };

        localStorage.setItem('articles', JSON.stringify(newStorage))
    } else {
        const storageArticles = {
            articles: [{title: action.payload.title, text: action.payload.text, name: action.payload.name, id: articleIndex++}]};
        localStorage.setItem('articles', JSON.stringify(storageArticles))
    }
}

export function articles(state:ActicleState = initState, action: AppActions) : ActicleState {
    switch (action.type) {
        case ADD_ARTICLE:
            addToLocalStorage(action);
            return [...state, {title: action.payload.title, text: action.payload.text, name: action.payload.name, id: articleIndex++}];
        default:
            return state
    }
}

export const rootState = combineReducers({
    articles
});

