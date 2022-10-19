import Form from 'react-bootstrap/Form';

function Dropdown({select_type,select_option}) {
  return (
     
    <Form.Select aria-label="test">
      <option>{select_type}</option>
   {  select_option.map((option1)=>{
    return(
      <option value={option1}>{option1}</option>
    )})}
    </Form.Select>


 

  );
}

export default Dropdown;