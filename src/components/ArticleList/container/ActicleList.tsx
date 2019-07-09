import ArticleList from "../ArticleList";
import {StoreState} from "../../../redux/types";
import {connect} from "react-redux";

// @ts-ignore
const storageArticles = JSON.parse(localStorage.getItem("articles")) || {articles: []};

function mapStateToProps({articles}: StoreState) {
    return {
        articles: [...articles, ...storageArticles.articles]
    }
}

export default connect(mapStateToProps)(ArticleList)