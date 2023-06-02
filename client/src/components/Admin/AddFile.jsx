import { useState } from "react";
import { Container } from "react-bootstrap";
import { AiOutlineArrowLeft, AiOutlineFileImage } from "react-icons/ai";
import { Link } from 'react-router-dom'
import "../../styles/Admin/AddFiles.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};
const AddFile = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <Container className="add-all-files">
        <Link to='/admin/dashboard'><AiOutlineArrowLeft className="back-arrow"/></Link>
        <div className="add-file-header">
            <h1>Add Files</h1>
        </div>
        <form action="">
            <div className="file-title">
                <input type="text" placeholder="File title"/>
            </div>
            <div className="file-title">
                <select name="" id="">
                    <option value="">select</option>
                    <option value="">video</option>
                    <option value="">audio</option>
                    <option value="">pdf</option>
                    <option value="">images</option>
                </select>
            </div>
            <div className="file-title">
              <label className="mb-4 text-primary" htmlFor="choose-image" >Select File <AiOutlineFileImage />
              </label>
                <input type="file" id="choose-image" style={{display: 'none'}} />
            </div>
            
        <ReactQuill
            modules={modules}
            theme="snow"
            placeholder="File Description"
            value={value}
            onChange={setValue}
        />
        <button>Add</button>
        </form>
      </Container>
    </>
  );
};

export default AddFile;
