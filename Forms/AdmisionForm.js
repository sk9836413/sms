import React from 'react';
import FormHeader from './FormHeader'
import Name  from './Name.js';
import Radio from './Radio.js'
import Dropdown from './Dropdown'
import Button from './Button.js'
import Profilepic from './Profilepic';
import { DatePicker } from 'antd';

export default function AdmisionForm() {
  const blood_group=["A+","A-","B+","B-","O+","O-","AB+","AB-"];
  return (
    <div className='admission_form'>
    <FormHeader heading="Admission Form"/>
    <Profilepic className="profilepic"/>
    <label>Candidate Details</label>
    <Name Name_Type="Student Name"/>
   <label>Gender</label>
    <Radio option1="male" option2="female" option3="others"/>
  <label>Date Of Birth</label><input type="date"></input>
  <Dropdown select_type="Blood Group" select_option = {blood_group} />
  <Button button_type1="next" button_type2="back"/>
  <DatePicker />  
    </div>
  )
}
