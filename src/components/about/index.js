import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Parallax } from 'react-parallax';

import Nav from "../nav"
import "./style.css";


const About = () => {
    return (
        <Container fluid>
            <Nav/>
            <Row>
                <Col>
                    {/* <Parallax id="image1" bgImage="/assets/studio4.jpg" bgImageAlt="the cat" strength={200}>
                        <div style={{ height: '750px' }}>
                            <div id="title" style={{ background: "white", padding: "20px",position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "50px" }}>ABOUT</div>
                        </div>
                    </Parallax> */}
                    <Parallax id="image1" bgImage="/assets/textural_painting_3.jpg" bgImageAlt="oil painting" strength={200}>
                        <div style={{ height: '700px' }}>
                            <div style={{ background: "white", padding: "20px",position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "50px"  }}>ABOUT</div>
                        </div>
                    </Parallax>
                    <div>
                        <Row>
                            <Col xs={5}>
                                <img src="/assets/India.jpg" alt="artist" id="profile_image"></img>
                            </Col>
                            <Col xs={7} id="about-text-row-1">
                                <div id="name" style={{marginBottom: "12px", fontSize: "30px"}}> INDIA GRAY </div>
                                <p>
                                    India has been a lover of art her entire life.
                                    White she studied art in school, most of her exploration of styles of different styles of painting has been self-taught.
                                </p>
                                <p>
                                    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."
                                </p>
                            </Col>
                        </Row>
                        <Row id="about-text-row-2">
                            <p>
                                Throughout high school and university, India studied many styles of painting from still life to landscape to abstract to 
                            </p>
                            <p>
                                India adds texture to her works using for an added '
                            </p>
                            <p>
                                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."
                            </p>
                        </Row>
                    </div>
                    {/* <Parallax id="image1" bgImage="/assets/textural_painting_3.jpg" bgImageAlt="the cat" strength={200}>
                        <div style={{ height: '700px' }}>
                            <div id="subtitle" style={{ background: "white", padding: "20px",position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "50px"  }}>UPCOMING EXHIBITIONS</div>
                        </div>
                    </Parallax> */}
                </Col>
            </Row>
        </Container>
    );
};

export default About;