import React from 'react';
import FormHeader from './FormHeader'
import Name  from './Name.js';
import Radio from './Radio.js'
import Dropdown from './Dropdown'
import Button from './Button.js'
import Profilepic from './Profilepic';
import { DatePicker } from 'antd';
import './Form.css';
import 'antd/dist/antd.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './ad.css'
import Date from './Date.js'


export default function Parents() {
  const blood_group=["A+","A-","B+","B-","O+","O-","AB+","AB-"];
  return (
    <div>
    
    
    
    <div className='admission_form'>
    <label>Father's Details</label>
    <Name Name_Type="Father Name" field1="First Name" field2="Middle Name" field3="Last Name"/>
    <Name Name_Type=""field1="Occupation" field2="Yearly Income" field3="Mobile Number"/>
    <label>Mother's Details</label>
    <Name Name_Type="Mother's Name"field1="First Name" field2="Middle Name" field3="Last Name"/>
    <Name Name_Type="" field1="Occupation" field2="Yearly Income" field3="Mobile Number"/>
    
    <div className="opt">
 </div>
 
    </div>
    </div>
  )
}
