import { Col, Container, Row } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import { AiFillEye } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { Link } from "react-router-dom";
import "../styles/FileView.css";
import testImage from "../assets/bg2.avif";

const FileView = () => {
  return (
    <>
      <div className="file-view-wrapper">
        <Container>
          <Row>
            <Col>
              <div className="file-header">
                <h1>Wedding Invitation card for Mr. and Mrs. Amofah</h1>
              </div>
              <div className="file-date">
                <p>Created: 20/02/2023</p>
              </div>
              <div className="file-icons">
                <ul>
                  <li className="a-1 view">
                    <AiFillEye />
                    <a href={testImage} target="blank">
                      Preview
                    </a>
                  </li>
                  <li className="a-1 dwld">
                    <FiDownload />
                    <a href={testImage} download>
                      Download
                    </a>
                  </li>
                  <li className="a-1 share">
                    <IoMdShareAlt /> <Link to="/files/send/email">Share</Link>
                  </li>
                </ul>
              </div>
              <div className="file-image">
                <img src={testImage} alt="txtImg" />
              </div>
              <div className="description">
                <h3>Description</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Illum veniam et enim eaque, repudiandae dolores? Aspernatur
                  porro modi minus voluptates error illum esse eaque! Debitis
                  aspernatur nulla quibusdam expedita illum. Magnam praesentium
                  ipsa at iusto temporibus et quidem deserunt odio, repudiandae
                  molestiae facilis nemo qui blanditiis eos magni iste est ea! A
                  ut mollitia qui doloremque soluta, earum iste quos! Excepturi
                  non temporibus et architecto sequi quis alias. Laudantium odio
                  vero minus nemo! Repellendus consequuntur aspernatur laborum
                  ullam eum sit minus ratione fugiat molestias corrupti! Culpa
                  eum maiores cumque consectetur! Sit quam quos quibusdam <br /> <br />
                  reprehenderit deserunt quas? Aliquid id obcaecati ducimus
                  nihil, facilis veritatis distinctio nulla et commodi amet enim
                  consequatur dignissimos iste necessitatibus eius culpa illum
                  sed molestias iusto cumque provident quaerat modi eum alias
                  tempora error. Voluptatibus, sed? Similique id illum corrupti
                  eveniet minima eum esse adipisci fugiat libero quae quia,
                  quasi ducimus est in doloribus ratione non officiis ut quo
                  sequi magni cum vero. Fugit, adipisci provident.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FileView;
