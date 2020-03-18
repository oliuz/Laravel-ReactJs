import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Jumbotron, Container, Button, ButtonToolbar } from "react-bootstrap";

const Home = () => <span>Home</span>;

const About = () => <span>About</span>;

const Users = () => <span>Users</span>;

const App = () => (
    <BrowserRouter>
        <Container className="p-3">
            <Jumbotron>
                <h1 className="header">Welcome To React-Bootstrap</h1>
                <h2>
                    Current Page is{" "}
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </h2>
                <h2>
                    Navigate to{" "}
                    <ButtonToolbar className="custom-btn-toolbar">
                        <Link to="/">
                            <Button>Home</Button>
                        </Link>
                        <Link to="/about">
                            <Button>About</Button>
                        </Link>
                        <Link to="/users">
                            <Button>Users</Button>
                        </Link>
                    </ButtonToolbar>
                </h2>
            </Jumbotron>
        </Container>
    </BrowserRouter>
);

export default App;
