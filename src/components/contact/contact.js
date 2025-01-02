import './contact.css'
import Email from './sendemail/email'
const Contact = () => {
  return <div className="Contact">
    <div className='co-column1'>
      <div className='co-contact'>
        <h3 className='h3CSS'>Contact</h3>
        <b>Email-</b> ggadekar87@gmail.com<br></br>
        <b>Phone (UAE): </b>+971 561580253<br></br>
        <b>Phone (IN):</b> +91 7709558425<br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <h3 className='h3CSS'> Address </h3>
        <b> Current</b> Salam tower, Abu dhabi, UAE.
        <br></br>
        <br></br>
        <b> Permanent </b> Pune, Maharashtra, India.
        <hr></hr>

      </div>
    </div>
    <div className='co-column2'>
      <Email data-testid="email-test"></Email>
    </div>
  </div>;
};

export default Contact;
