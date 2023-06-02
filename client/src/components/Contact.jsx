import '../styles/Contact.css'
import {Container} from 'react-bootstrap'
import Footer from './Footer'


const Contact = () => {
  return (
    <div className="about-wrapper">
      <div className="about-head">
        <h1>Contact Us</h1>
        <p>We are ready to offer you any help</p>
      </div>
      <Container>
        <div className="about-form">
          <form action="">
            <div className="form-name">
              <label htmlFor="name">Your name:</label>
              <input type="text" required className='form-control'/>
            </div>
            <div className="form-name">
              <label htmlFor="email">Your email address associated with file server:</label>
              <input type="email" required className='form-control'/>
            </div>
            <div className="form-name">
              <label htmlFor="name">Subject:</label>
              <input type="text" required className='form-control'/>
            </div>
            <div className="form-name">
              <label htmlFor="name">Details:</label>
              <textarea name="" id="" cols="30" rows="10" className='form-control' />
            </div>
          </form>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default Contact