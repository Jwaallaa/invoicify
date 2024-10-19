import React, { useState } from 'react'
import './Addinvoice.css'
import { saveInvoice } from '../services/Api'
const AddInvoice = ( {newinv ,  setnewinv}) => {


   let defaultinvoice = {
    Vendor:  "",
    Product :  "",
    Amount :   "",
    Date :      "",
   }


    const  [invoice, setInvoice] = useState(defaultinvoice);
    const [Addinvoice , setAddinvoice] = useState(false);


    let manageNewInvoice = (e)=>{
        e.preventDefault()
        setInvoice((inv)=>{
            return {...inv, [e.target.name]: e.target.value }
        })
    }

    let setTrue = (e)=>{
        e.preventDefault()
        setAddinvoice(true)
        }

    let submitinv = (e)=>{
        e.preventDefault()
        console.log(invoice)
        setAddinvoice(false)
        saveInvoice(invoice)
        .then((res)=>{
            console.log(res)
            })
            .catch((err)=>{
                console.log(err)
                })
            
        setInvoice(defaultinvoice)
        setnewinv(true);
        

    }


  return (<>
    {!Addinvoice &&  <button className='addbtn btn' onClick={setTrue}>Add Invoice</button>}


    {Addinvoice && <div className="container">
        <form action="#">
            <input type="text" name='Vendor'  placeholder='Vendor Name' onChange={manageNewInvoice} value={invoice.Vendor}/>
            <input type="text" name='Product'  placeholder='Product' value={invoice.Product} onChange={manageNewInvoice}/>
            <input type="number" name='Amount'  placeholder='Amount' value={invoice.Amount} onChange={manageNewInvoice}/>
            <input type="date" name='Date'  placeholder='date' value={invoice.Date} onChange={manageNewInvoice}/>

            <button  onClick={submitinv} className='btn'>Submit</button>


        </form>
    </div>}
    </>
  )
}

export default AddInvoice