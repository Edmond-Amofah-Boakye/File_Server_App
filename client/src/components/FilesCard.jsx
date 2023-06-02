import "../styles/FilesCard.css";
import { Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { GoKebabVertical } from "react-icons/go";
import { FiDownload } from "react-icons/fi";
import { FaRegFilePdf } from "react-icons/fa";
import { AiFillEye, AiFillFileWord, AiOutlineFilePdf } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { MdAudiotrack } from "react-icons/md";
import { FcVlc } from "react-icons/fc";
import img1 from "../assets/img-3.jpg";

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
            <FiDownload className="ic" />
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
      <Col md={3} className="file-card">
      <Card className="shadow">
          <Card.Header>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, saepe!
          </Card.Header>
          <Card.Body>
            <Card.Text className="all-files-icons">
              <FcVlc className="file-audio-icon video" />
            </Card.Text>
            <Card.Footer className="icons">
                Video
                <GoKebabVertical
                className="dot-lines"
                  variant="primary"
                  onClick={() => setModalShow(true)}
                />
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3} className="file-card">
      <Card className="shadow">
          <Card.Header>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, saepe!
          </Card.Header>
          <Card.Body>
            <Card.Text className="all-files-icons">
              <AiOutlineFilePdf className="file-audio-icon pdf"/>
            </Card.Text>
            <Card.Footer className="icons">
                PDF
                <GoKebabVertical
                className="dot-lines"
                  variant="primary"
                  onClick={() => setModalShow(true)}
                />
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3} className="file-card">
      <Card className="shadow">
          <Card.Header>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, saepe!
          </Card.Header>
          <Card.Body>
            <Card.Text className="all-files-icons">
              <MdAudiotrack className="file-audio-icon audio" />
            </Card.Text>
            <Card.Footer className="icons">
                Audio
                <GoKebabVertical
                className="dot-lines"
                  variant="primary"
                  onClick={() => setModalShow(true)}
                />
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3} className="file-card">
      <Card className="shadow">
          <Card.Header>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, saepe!
          </Card.Header>
          <Card.Body>
            <Card.Text className="all-files-icons">
              <AiFillFileWord className="file-audio-icon word"/>
            </Card.Text>
            <Card.Footer className="icons">
                Word Document
                <GoKebabVertical
                className="dot-lines"
                  variant="primary"
                  onClick={() => setModalShow(true)}
                />
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default FilesCard;
