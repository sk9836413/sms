import Form from 'react-bootstrap/Form';
import'./Form.css';
function Dropdown({date_type}) {
    return (
       
      <div className="calender">
        <Form.Label>{date_type}</Form.Label>
        <div>
        <input type="date" className="calender1"/>

</div>



      </div>
  
  
   
  
    );
  }
  
  export default Dropdown;