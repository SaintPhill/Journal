import {StoreState} from "../../../redux/types";
import {connect} from "react-redux";
import SingleArticle from "../SingleArticle";

function mapStateToProps({articles}: StoreState) {
    return {
        articles
    }
}

export default connect(mapStateToProps)(SingleArticle)