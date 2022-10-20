import Form from 'react-bootstrap/Form';
import'./Form.css';
import Col from 'react-bootstrap/Col';

function Dropdown({select_type,select_option}) {
  return (
    <Form.Group as={Col} md="4" controlId="validationCustom01">
     
     <div>
     <Form.Label className="check">{select_type}</Form.Label>
     <div>
    <select className='dropdown'>
      <option>{select_type}</option>
   {  select_option.map((option1)=>{
    return(
      <option value={option1}>{option1}</option>
     
    )})}
    </select>
    </div>
    </div>
    </Form.Group>

 

  );
}

export default Dropdown;