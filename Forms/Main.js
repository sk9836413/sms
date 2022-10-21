import React from 'react'
import AdmisionForm from './AdmisionForm'
import Parents from './Parents'
import { useState } from 'react'
import './Form.css'
import Button from './Button.js'
import Adresss from './Adresss.js'
import PreviousSchool from './PreviousSchool.js'


export default function Main() {
    const [page, setPage] = useState(0);
    const FormTitles = ["Student Details","Parents Details","Adress","Previos School Details"];
   
    

   const pagechange = ()=>{
    if(page<FormTitles.length-1){
        
        setPage(page + 1)
    }   

}
    const pagechange1 = ()=>{
        setPage(page - 1)
        
    }
    const submit = ()=>{}
    
  return (
    <div className="body">
       
       

        <div className='admission_form'>
        <h1>{FormTitles[page]}</h1>
        {(page==0)?<AdmisionForm/> : (page == 1)?<Parents/>:(page==2)?<Adresss/>  : (page==3)?<PreviousSchool/>:<div> page under devlopment</div> 

        }
            

{ (page == FormTitles.length-1) ?  <Button button_type1="submit" onClick functions={submit} />
:<Button button_type1="Next" onClick functions={pagechange}/>  } 

{ (page == 0) ? <div className='button'>
<Button button_type1="Previous"functions={pagechange1} status="true"/>
</div>
:<div className='button'>
<Button button_type1="Previous"functions={pagechange1}/>
</div>  }  




        </div>




    </div>
  )
}
