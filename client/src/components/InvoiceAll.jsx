import React from 'react'
import './invoiceAll.css'
import { deleteInvoice } from '../services/Api';




const InvoiceAll = ( {invoices ,rmInvoices}) => {

    console.log(invoices);




  return (
<>
<div className="container">
    
        <table>
            <thead>
                <tr>
                    <th>Vendor</th>
                    <th>Product</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                {
                    invoices.map((invoice)=>{
                        return(
                            <tr key={invoice._id}>
                                <td>{invoice.Vendor}</td>
                                <td>{invoice.Product}</td>
                                <td>{invoice.Amount}</td>
                                <td>{invoice.Date}</td>
                                <td>{invoice.Action}</td>
                                <td><button onClick={()=>{
                                    rmInvoices(invoice._id);
                                    
                                }} className="btn">Delete</button></td>
                            </tr>
                            )
                    })
                }
            </thead>
        </table>
    
</div>




</>  )
}

export default InvoiceAll