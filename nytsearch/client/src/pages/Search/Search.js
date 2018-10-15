import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Article from "../../components/Article";

class Search extends Component {
    initialState = {
        searchTerm: "",
        reqNum: "",
        startYear: "",
        endYear: "",
        articles: []
    };

    state = {
        searchTerm: "",
        reqNum: "",
        startYear: "",
        endYear: "",
        articles: []
    };
    
    searchArticles = (searchParams) => {
        API.getArticles({
            searchTerm: searchParams.searchTerm,
            reqNum: searchParams.reqNum,
            startYear: searchParams.startYear,
            endYear: searchParams.endYear
        })
        .then(res => {
            this.setState({ articles: res.data.response.docs })
        })
        .catch(err => console.log(err));
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.searchTerm && this.state.reqNum) {
            this.searchArticles(this.state)
        }
        this.setState(this.initialState);
    };

    render() {
        return (   
            <Container fluid>
                <Row>
                    <Col size="lg-12 md-12 sm-12">
            {/* //             <Jumbotron>
            //                 <h1>New York Times Search</h1>
            //             </Jumbotron> */}
                        <form>
                            <Input
                                value={this.state.searchTerm}
                                onChange={this.handleInputChange}
                                name="searchTerm"
                                placeholder="Search Term (required)"
                            />
                            <Input
                                value={this.state.reqNum}
                                onChange={this.handleInputChange}
                                name="reqNum"
                                placeholder="Number of articles (required)"
                            />
                            <Input
                                value={this.state.startYear}
                                onChange={this.handleInputChange}
                                name="startYear"
                                placeholder="Start Year (Optional)"
                            />
                            <Input
                                value={this.state.endYear}
                                onChange={this.handleInputChange}
                                name="endYear"
                                placeholder="End Year (Optional)"
                            />
                            <FormBtn
                                disabled={!(this.state.searchTerm && this.state.reqNum)}
                                onClick={this.handleFormSubmit}
                            >
                                Search
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col size="lg-12 md-12 sm-12">
                        <div className="panel panel-primary">
                            {this.state.articles.length ? (
                                <List>
                                    {this.state.articles.map(article => (
                                        <Article
                                            key={article._id}
                                            headline={article.headline.main} 
                                            url={article.web_url}
                                            id={article._id}
                                            />
                                    ))}
                                </List>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Search;