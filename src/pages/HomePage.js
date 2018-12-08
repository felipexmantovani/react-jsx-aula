import React, { Component } from 'react';

import { Alert, Button, Container, Row, Col } from 'reactstrap';

import Artigo from '../components/Artigo';
import Contador from '../components/Contador';

class HomePage extends Component {
    render() {
        return (
            <div>

                <Container>
                    <Row>
                        <Col>
                            <Alert color="primary">Olá Mundo</Alert>
                            <Alert color="danger">Olá Mundo</Alert>
                            <Button color="primary">Clique aqui</Button>

                            <Artigo
                                nome="Felipe"
                                texto="Programação Web com React JS"
                            />
                            <Artigo
                                nome="José"
                                texto="Programação Web com PHP"
                            />

                            <Contador tempo={500} />
                            <Contador numero={100} />
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default HomePage;
