import { Container, Row, Col, Table } from "react-bootstrap";
import { AiFillDelete } from 'react-icons/ai'
import "../../styles/Admin/Users.css";

const Users = () => {
  return (
    <>
      <div className="overview">
        <Container>
          <div className="user">
          </div>
            <h1 className="records">
              <span>ALL</span> RECORDS
            </h1>
          <h4 className="user-header">All Users</h4>
          <Row className="feeds-row-1">
          <Col md={4}>
            <h4 className="num-files">20 Users</h4>
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
                <option value="">Active</option>
                <option value="">Confirmed</option>
              </select>
            </div>
          </Col>
        </Row>
          <Table striped responsive>
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Active</th>
                <th>Confirmed</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark Eddy Blaise</td>
                <td>edmundboakye1622@gmail.com</td>
                <td>Admin</td>
                <td>True</td>
                <td>True</td>
                <td><AiFillDelete className="action-icon action-delete" /></td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
};

export default Users;
