import { Container, Row, Col, Table } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { AiFillEye, AiFillDelete, AiFillEdit, AiOutlineSend } from "react-icons/ai";
import { Link } from 'react-router-dom'
import "../../styles/Admin/Users.css";

const AllFiles = () => {
  return (
    <>
      <div className="overview">
        <Container>
          <div className="user">
            <Link to='/files/add'><button>Add File</button></Link>
          </div>
          <h1 className="records">
            <span>ALL</span> RECORDS
          </h1>
          <h4 className="file-header">All Files</h4>
          <Row className="feeds-row-1">
          <Col md={4}>
            <h4 className="num-files">385 Files</h4>
          </Col>
          <Col sm={4}>
            <div className="sort">
              <select name="" id="">
                <option value="">Sort By</option>
                <option value="">Ascending</option>
                <option value="">Descending</option>
              </select>
            </div>
          </Col>
          <Col sm={4}>
            <div className="filter">
              <select name="" id="">
                <option value="">Filter By</option>
                <option value="">Date</option>
              </select>
            </div>
          </Col>
        </Row>
          <Table striped responsive>
            <thead>
              <tr>
                <th>No.</th>
                <th>Title</th>
                <th>Description</th>
                <th><TfiEmail className='statistics-icon'/></th>
                <th><FiDownload /></th>
                <th>View</th>
                <th>Send</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Wedding Invitation</td>
                <td>This is the ...</td>
                <td>5</td>
                <td>10</td>
                <td><AiFillEye className="action-icon action-view"/></td>
                <td><AiOutlineSend className="action-icon action-send"/></td>
                <td><AiFillEdit className="action-icon action-edit"/></td>
                <td><AiFillDelete className="action-icon action-delete"/></td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
};

export default AllFiles;
