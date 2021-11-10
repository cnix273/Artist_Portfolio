import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Parallax } from 'react-parallax';

import Nav from "../nav"
import "./style.css";


const Home = () => {
    return (
        <Container fluid>
            <Nav/>

            <Parallax id="image1" bgImage="/assets/studio2.jpg" bgImageAlt="the cat" strength={200}>
                <div style={{ height: '900px' }}>
                    <div style={{ background: "white", padding: "20px",position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "50px" }}>INDIA NIX</div>
                </div>
            </Parallax>

            <div className="textElement" style={{ height: '400px' }}>
                
            </div>

            <Parallax id="image1" bgImage="/assets/textural_painting_3.jpg" bgImageAlt="the cat" strength={200}>
                <div style={{ height: '900px' }}>
                    <div style={{ background: "white", padding: "20px",position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "50px"  }}>RECENT WORKS</div>
                </div>
            </Parallax>

            <div style={{ height: '200px' }}>
                <p className="textElement">
                    Throughout high school and university, India studied many styles of painting from still life to landscape to abstract to 
                </p>
                <p className="textElement">
                    India adds texture to her works using for an added '
                </p>
            </div>
            
            <Row className="image-trio">
                <h2 style={{textAlign: "center", padding: "40px 0"}}>| | |</h2>
                <Col xs={4} id="trio-pic1">
                    <img src="/assets/textural_painting.jpg" alt="neutral oil painting" className="img-responsive" style={{ width: "100%" }}></img>
                </Col>
                <Col xs={4} id="trio-pic2">
                    <img src="/assets/textural_painting_2.jpg" alt="oil painting close up" className="img-responsive" style={{ width: "100%" }}></img>
                </Col>
                <Col xs={4} id="trio-pic3">
                    <img src="/assets/textural_painting_3.jpg" alt="oil painting close up" className="img-responsive" style={{ width: "100%" }}></img>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;