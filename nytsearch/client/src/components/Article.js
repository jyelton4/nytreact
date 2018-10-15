import React, { Component } from 'react';
import { ListItem } from "../components/List";
import { Link } from "react-router-dom";

class Article extends Component {
    state = {
        article: ""
    }

    render() {
        return <div>
            <ListItem key={this.props.id}>
                <Link to={this.props.url}>
                    <strong>
                        {this.props.headline}
                    </strong>
                </Link>
            </ListItem>
        </div>              
    }
}

export default Article;