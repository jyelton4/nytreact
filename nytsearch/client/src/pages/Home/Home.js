import React, { Component } from 'react';
import Search from "../Search/Search";
import SavedArticles from "../SavedArticles/SavedArticles";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";

class Home extends Component {
    state = {
        href: "/search"
    }

    handleInputChange = event => {
        const { href, value } = event.target;
        this.setState({
          [href]: value
        });
    };

    componentDidUpdate(prevProps) {
        if (prevProps !== this.state) {
            
        }
    }

    render() {
        return (
        <Container fluid>
            <Row>
                <Col size="lg-12 md-12 sm-12">
                    <Jumbotron>
                        <h1>New York Times Search</h1>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col size="lg-12 md-12 sm-12">
                    <Nav handleInputChange={this.handleInputChange}/>
                </Col>
            </Row>
            <Row>
                <Col size="lg-12 md-12 sm-12">
                    
                </Col>
            </Row>
        </Container>
        )
    }
};

export default Home;