import React, { Component } from 'react';

import { Container } from 'reactstrap';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

import './App.css';

import HomePage from './HomePage';
import TarefasPage from './TarefasPage';
import SobrePage from './SobrePage';
import LoginPage from './LoginPage';

import PrivateRoute from '../components/PrivateRoute';
import Menu from '../components/Menu';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Container>
                    <Menu />

                    <Route path="/" exact component={HomePage} />
                    <PrivateRoute path="/tarefas" component={TarefasPage} />
                    <Route path="/sobre" component={SobrePage} />
                    <Route path="/login" component={LoginPage} />
                </Container>
            </BrowserRouter>
        );
    }
}

export default App;
