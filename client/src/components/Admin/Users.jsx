import { useContext } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import "../../styles/Admin/Users.css";
import { Context } from "../../store/AppContext";


const Users = () => {

const { getUsers, search } = useContext(Context)

//search 
let users= getUsers
users = getUsers.filter((user)=>{
  return user.name.toLowerCase().includes(search.toLowerCase())
})
  
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
          <Col md={9}>
            <h4 className="num-files">{getUsers.length} Users</h4>
          </Col>
          <Col sm={3}>
            <div className="sort">
              <select name="" id="">
                <option value="">Sort By</option>
                <option value="">Ascending</option>
                <option value="">Descending</option>
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
              </tr>
            </thead>
            <tbody>
              {users.map(item=>{
                return (
                  <tr key={item._id}>
                    <td>1</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                    <td>{item.active.toString()}</td>
                    <td>{item.confirmed.toString()}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
};

export default Users;
