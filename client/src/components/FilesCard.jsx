/* eslint-disable react/prop-types */
import "../styles/FilesCard.css";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import server from './Helpers/Server'
import { Link, } from "react-router-dom";
import viewIcon from "./Helpers/FileRender";
import axios from "axios";


const FilesCard = ({ files }) => {
  
  const handleDownload = (id) =>{
      axios.get(`${server}/file/downloads/${id}`, {withCredentials: true})
  }

  return (
    <Row>
      {files.map((el) => {
        return (
          <Col md={4} lg={3} className="file-card" key={el._id}>
            <Card className="shadow card-wrapper ">
              <Card.Header className="file-card-header">{el.title}</Card.Header>
              <Card.Body>
                <Card.Text className="all-files-icons">
                  {viewIcon(el.type)}
                </Card.Text>
                <div className="mb-4">{el.description}</div>
                <div className="share-downoad">
                  <Link to={`/file/send/email/${el._id}`}>
                    <button className="share-btn  w-100">
                      Share File
                    </button>
                  </Link>
                  <button className="download-btn  w-100" onClick={()=>handleDownload(el._id)}>
                    Download
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default FilesCard;
