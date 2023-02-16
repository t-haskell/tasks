import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import dog from "./my_dog.jpeg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Website by Tommy Haskell. Hello World.
            </p>
            <h1 className="App-myHeader">Welcome to Tommy&#39;s Website</h1>
            <img
                src={dog}
                alt="A picture of my dog Niko"
                style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    display: "block",
                    margin: "auto"
                }}
            />
            Sports Ive Played:
            <ul>
                <li>Lacrosse</li>
                <li>Football</li>
                <li>Soccer</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    backgroundColor: "red",
                                    width: "100px",
                                    height: "500px"
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    backgroundColor: "red",
                                    width: "100px",
                                    height: "500px"
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
