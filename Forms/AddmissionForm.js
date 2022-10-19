import React from 'react'
import './AdmissionForm.css'
import Profilepic from './Profilepic.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function AddmissionForm() {
  return (
  
     
        <div className='form__input'>
           <div className='Addmisionform'>
        <h1>Addmision form</h1>
        </div>
          
        <Profilepic/>
        <div className='name'>
        <label className='form__label'>Student Id</label><input type="text" className='form__input'></input>
        <label className='form__label'>First Name</label> <input type="text" className='form__input'></input>
        <label className='form__label'>Middle Name</label> <input type="text" className='form__input'></input>
        <label className='form__label'>Last Name</label> <input type="text" className='form__input'></input>
        </div>
        <div className='name'>
        <label className='form__label'>Gender</label> <input type="radio" className='form__input'></input><label>Male</label>
        <input type="radio" className='form__input'></input><label>Female</label>
        <label className='form__label'>Date Of Birth</label><input type="date" className='form__input'></input>
        </div>
        <div className='name'>
        <label className='form__label'>Fathers First Name</label><input type="text" className='form__input'></input>
        <label className='form__label'>Fathers Mid Name</label><input type="text" className='form__input'></input>
        <label className='form__label'>Fathers Last Name</label><input type="text" className='form__input'></input>
        </div>
        <div className='name'>
        <label className='form__label'> Mother First Name</label><input type="text" className='form__input'></input>
        <label className='form__label'> Mother Mid Name</label><input type="text" className='form__input'></input>
        <label className='form__label'> Mother Last Name</label><input type="text"className='form__input'></input>
        </div>
        <div className='name'>
        <label className='form__label'>Fathers Occupation</label><input type="text"className='form__input'></input>
        <label className='form__label'>Fathers Yearly Income</label><input type="text"className='form__input'></input>
        </div>
        <div className='name'>
        <label className='form__label'>Mothers Occupation</label><input type="text"className='form__input'></input>
        <label className='form__label'>Mothers Yearly Income</label><input type="text"className='form__input'></input>
        </div>
        <div className='name'>
        <label className='form__label'>Current Adress</label><textarea type="text"className='form__input'></textarea>
        
        <label className='form__label'>Country</label><input type="text"className='form__input'></input>
        <label className='form__label' >STATE</label><select className='form__input'><option>Andhra Pradesh</option>
        <option>Arunachal Prades</option>
        <option>Assam</option>
        <option>Bihar</option>
        <option>Chhattisgarh</option>
        <option>Goa</option>
        <option>Gujarat</option>
        <option>Haryana</option>
        <option>Himachal Pradesh</option>
        <option>Jammu and Kashmir	</option>
        <option>Jharkhand</option>
        <option>Karnataka</option>
        <option>Kerala</option>
        <option>Madhya Pradesh</option>
        <option>Maharashtra</option>
        <option>Manipur</option>
        <option>Meghalaya</option>
        <option>Mizoram</option>
        <option>Nagaland</option>
        <option>Odisha</option>
        <option>Punjab</option>
        <option>Rajasthan</option>
        <option>Sikkim</option>
        <option>Tamil Nadu	</option>
        <option>Telangana</option>
        <option>Tripura	</option>
        <option>Uttar Pradesh	</option>
        <option>Uttarakhand	</option>
        <option>West Bengal	</option>
        </select>
        <label >District</label><input type="text" className='form__input'></input>
        <label>Pincode</label><input type="text" className='form__input'></input>
        </div>
        <div className='name'>
        <label className='form__label'>Permanent Adress</label><textarea type="text" className='form__input'></textarea>
        
        <label className='form__label'>Country</label><input type="text" className='form__input'></input>
 <label>STATE</label><select className='form__input'><option>Andhra Pradesh</option>
 <option>Arunachal Prades</option>
 <option>Assam</option>
 <option>Bihar</option>
 <option>Chhattisgarh</option>
 <option>Goa</option>
 <option>Gujarat</option>
 <option>Haryana</option>
 <option>Himachal Pradesh</option>
 <option>Jammu and Kashmir	</option>
 <option>Jharkhand</option>
 <option>Karnataka</option>
 <option>Kerala</option>
 <option>Madhya Pradesh</option>
 <option>Maharashtra</option>
 <option>Manipur</option>
 <option>Meghalaya</option>
 <option>Mizoram</option>
 <option>Nagaland</option>
 <option>Odisha</option>
 <option>Punjab</option>
 <option>Rajasthan</option>
 <option>Sikkim</option>
 <option>Tamil Nadu	</option>
 <option>Telangana</option>
 <option>Tripura	</option>
 <option>Uttar Pradesh	</option>
 <option>Uttarakhand	</option>
 <option>West Bengal	</option>
 </select>
 <label className='form__label'>District</label><input type="text" className='form__input'></input>
 <label className='form__label'>Pincode</label><input type="text" className='form__input'></input>
 </div>
 <div className='name'>
<label className='form__label'>Fathers Mobile Number</label><input type="text" className='form__input'></input>
<label className='form__label'>Mothers Mobile Number</label><input type="text" className='form__input'></input>
<label className='form__label'>Email Id</label><input type='email' className='form__input'></input>
</div>
<div className='name'>
<label className='form__label'>AADHAR NUMBER</label><input type="text" className='form__input'></input>
<label className='form__label'>Religion</label><select className='form__input'><option>Hinduism</option>
<option>Islam</option>
<option>Christianity</option>
<option>Sikhism</option>
<option>Buddhism</option>
<option>Jainism</option>
</select>
</div>
<div className='name'>
<label className='form__label'>Last School Name</label><input Type="text" className='form__input'></input>
<label className='form__label'>Last Class Name</label><input Type="text" className='form__input'></input>
</div>
<div className='name'>
<label className='form__label'>Blood Group</label><input type="text" className='form__input'></input>
<label className='form__label'>Admission Date</label><input type="date" className='form__input'></input>


  <button>submit</button>
  </div>

  </div>


 
  )
}
