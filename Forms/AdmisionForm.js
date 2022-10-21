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


export default function AdmisionForm() {
  const blood_group=["A+","A-","B+","B-","O+","O-","AB+","AB-"];
  return (
    <div>
    
    
    
    <Profilepic className="profilepic"/>
    <label>Candidate Details</label>
    <Name Name_Type="Student Name" field1="First Name" field2="Middle Name" field3="Last Name"/>
    <div className="opt">
    
    <Radio option1="male" option2="female" option3="others" id="radio"/>
    
    <Date date_type="Date Of Birth" id="date"/>
  <Dropdown select_type="Blood Group" select_option = {blood_group} id="dropdown"/>
 </div>
 
    </div>

  )
}
