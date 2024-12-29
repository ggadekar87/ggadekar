import './contact.css'
import Email from './sendemail/email'
const Contact = () => {
  return <div className="Contact">
    <div className='co-column1'>
      <div className='co-contact'>
        Current address:<br></br> Abu dhabi, UAE.
        <hr></hr>
        UAE Mobile:<br></br> +971 561580253
        <hr></hr>
        India Mobile:<br></br> +91 7709558425
        <hr></hr>
        Email: <br></br>ggadekar87@gmail.com
        <hr></hr>
        India Address:
        <br></br>pune,MH,India
      </div>
    </div>
    <div className='co-column2'>
      <Email></Email>
    </div>
  </div>;
};

export default Contact;
