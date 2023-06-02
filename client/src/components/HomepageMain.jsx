import "../styles/HomepageMain.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import videoIcon from '../assets/video.jpg'
import pfdIcon from '../assets/PDF.png'
import imageIcon from '../assets/image-logo.png'
import audioIcon from '../assets/audio.jpg'


const HomepageMain = () => {
  return (
    <>
      <Container>
        <Row className="homepage">
          <Col md={12}>
            <h1>
              Helping Businesses succeed through <br />
              the power of file sharing
            </h1>
            <p className="home-message">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam sit a nobis, vero nulla fuga quaerat. Distinctio
              voluptates magnam reiciendis ratione molestiae incidunt,
              asperiores aut vitae ducimus aliquid numquam laboriosam obcaecati
              debitis tempora voluptate laborum nam! Quis, numquam porro
              necessitatibus error ullam iusto repudiandae, ipsa maxime
              officiis, fuga perspiciatis voluptatem.
            </p>
            <Link to="/feeds">
              <button>Explore our Files Now!!</button>
            </Link>
          </Col>
        </Row>
      </Container>
      <div className="file-types">
        <Container>
          <Row>
            <Col md={3}>
              <div className="videos-icon-info">
                <div className="video-icon">
                  <img src={videoIcon} alt="" />
                </div>
                  <h4>Videos</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ipsam?</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="videos-icon-info">
                <div className="video-icon">
                  <img src={pfdIcon} alt="" />
                </div>
                  <h4>PDF's</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ipsam?</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="videos-icon-info">
                <div className="video-icon">
                  <img src={imageIcon} alt="" />
                </div>
                  <h4>Images</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ipsam?</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="videos-icon-info audio-info">
                <div className="video-icon">
                  <img src={audioIcon} alt="" />
                </div>
                  <h4>Audio</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ipsam?</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomepageMain;
