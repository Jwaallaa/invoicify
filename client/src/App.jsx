import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import AddInvoice from './components/AddInvoice'
import InvoiceAll from './components/InvoiceAll'
import { deleteInvoice, getAllInvoices } from './services/Api'




function App() {
  const [invoices , setinvoices] = useState([]);
  const [newinv  , setnewinv] = useState(false);

  useEffect(() => {
    const getData = async() => {
        const response = await getAllInvoices();
        setinvoices(response.data);
        setnewinv(false);
    }
    getData();
},[newinv]);



 const rmInvoice = (id)=>{
    deleteInvoice(id);
    const newInvoices = invoices.filter((invoice) => invoice._id !== id);
    setinvoices(newInvoices);

  }


  return (
    <>
      <Header/>
      <AddInvoice   setnewinv={setnewinv} newinv={newinv}/><br />
      {!invoices == []?<InvoiceAll  invoices={invoices} rmInvoices={rmInvoice} />: <b>No Pending Invoices</b>}
    </>
  )
}

export default App
