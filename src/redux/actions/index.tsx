import {ADD_ARTICLE} from "../constants";


interface Add_Article {
    type: ADD_ARTICLE;
    payload: {
        title: string,
        text: string,
        name: string
    }
}

export type AppActions = Add_Article

export function add_article(title: string, text: string, name: string) : Add_Article {
    return {
        type: ADD_ARTICLE,
        payload: {
            title,
            text,
            name
        }
    }
}