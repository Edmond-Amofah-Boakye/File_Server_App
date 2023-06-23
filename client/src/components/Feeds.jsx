import "../styles/Feeds.css";
import { useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineSearch } from 'react-icons/ai'
import { Context } from "../store/AppContext";
import FilesCard from "./FilesCard";
import PageNavbar from "./PageNavbar";

function Feeds() {
  
  const { getFiles } = useContext(Context);
  const [search, setSearch] = useState("")
  
  let files;

  files = getFiles.filter((el)=>{
    return el.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
    <PageNavbar />
    <div className="feeds">
      <div className="feeds-head">
        <h1 className="l">We've got you covered</h1>
        <p>
          <span>D</span>ownload and Share all Kind of Files through <br />
          <span> E</span>mail to your business partners
        </p>
      </div>
      <Container>
        <h1 className="all-files">All Files</h1>
        <Row className="feeds-row-1">
          <Col md={8}>
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
        </Row>
        <hr />
        <div className="search">
          {
            search.length === 0? <AiOutlineSearch className="search-icon"/> : " "
          }
          <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        <hr />
        <FilesCard files={files}/>
      </Container>
    </div>
    </>
  );
}

export default Feeds;
