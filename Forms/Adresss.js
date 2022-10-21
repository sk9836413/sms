import React from 'react';
import FormHeader from './FormHeader'
import Name  from './Name.js';
import Radio from './Radio.js'
import Dropdown2 from './Dropdown2'
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
import TwoboxInput from './TwoboxInput';
import BigText from './BigText.js'
import InputBox from './InputBox';


export default function Parents() {
  const states=["Assam","Bihar","Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"];
  return (
    <div>
    <div className='admission_form'>
        <div className='adress'>
        <div className="current_Adress">
        <BigText input_type="Current Adress"/>
        <div className='states'>
        <div className="drop">
<Dropdown2 select_type="State" select_option={states}id="drop"/></div>
</div>
<div className='TwoboxInput'>
<TwoboxInput field1="District" field2="Pincode"/></div>
</div>

        
        <div className="permanent_adress">
<BigText input_type="Permanent Adress"/>
<div className='states'>
    <div className="drop">
<Dropdown2 select_type="State" select_option={states}id="drop"/></div>
</div>
<div className='TwoboxInput'>
<TwoboxInput field1="District" field2="Pincode"/></div>
</div>

</div>
    </div>
    </div>
  )
}
