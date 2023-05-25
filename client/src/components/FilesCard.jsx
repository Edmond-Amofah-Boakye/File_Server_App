import "../styles/FilesCard.css";
import { Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { GoKebabVertical } from "react-icons/go";
import { FiDownload } from "react-icons/fi";
import { AiFillEye } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import img1 from "../assets/img-3.jpg";
import img2 from "../assets/img-1.jpg";
import img3 from "../assets/img-2.jpg";
import { Link } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <ul className="actions-icons">
          <li>
            <AiFillEye className="ic" /> <Link to="/files/view">View</Link>
          </li>
          <li>
            <IoMdShareAlt className="ic" /> <Link to='/files/send/email'>Share</Link>
          </li>
          <li>
            <FiDownload className="ic" />{" "}
            <a href={img1} download>
              Download
            </a>
          </li>
        </ul>
      </Modal.Body>
    </Modal>
  );
}

const FilesCard = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Row>
      <Col md={4} className="file-card">
        <Card>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Text className="icons">
              The image name
              <GoKebabVertical
               className="dot-lines"
                variant="primary"
                onClick={() => setModalShow(true)}
              />
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className="file-card">
        <Card>
          <Card.Img variant="top" src={img2} />
          <Card.Body>
            <Card.Text className="icons">
              The image name
              <GoKebabVertical
               className="dot-lines"
                variant="primary"
                onClick={() => setModalShow(true)}
              />
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className="file-card">
        <Card>
          <Card.Img variant="top" src={img3} />
          <Card.Body>
            <Card.Text className="icons">
              The image name
              <GoKebabVertical
               className="dot-lines"
                variant="primary"
                onClick={() => setModalShow(true)}
              />
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default FilesCard;
