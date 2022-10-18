import React from 'react'
import DatePicker from 'react-bootstrap-date-picker';
import FormHeader from './FormHeader'
import Name  from './Name.js';
import Radio from './Radio.js'

export default function AdmisionForm() {
  return (
    <div>

    <FormHeader heading="Admission Form"/>
    <h5>Candidate Details</h5>
    <Name Name_Type="Student Name"/>
    <h1>Gender</h1>
    <Radio option1="male" option2="female" option3="others"/>
    <h1>Date Of Birth</h1>
  
    
    
    
        






   










    </div>
  )
}
