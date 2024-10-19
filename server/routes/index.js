var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');



const main = async ()=>{
  try {
    await mongoose.connect('mongodb://localhost:27017/mydb')
    console.log('Connected to MongoDB');
    } catch (error) {
      console.error(error);
      }
}
main();


const invoiceSchema = new mongoose.Schema( {
  Vendor :  String,
  Product :  String,
  Amount  :  String,
  Date   :  Date,
  Action :{
    type: String,
    default : "Pending"
  }
  
});

let  Invoice = mongoose.model('Invoice', invoiceSchema);

/* GET home page. */
router.get('/invoice', async function(req, res) {
  await Invoice.find()
  .then((invoices)=>{
    res.json(invoices);
    })
    .catch((err)=>{
      res.status(500).json({message: err.message});
      });
});


router.post('/invoice' , async (req , res)=>{
  let newinvoice =  new Invoice(req.body);
  await newinvoice.save()
  .then((invoice)=>{
    res.json(invoice);
    })
    .catch((err)=>{
      res.status(500).json({message: err.message});
      });

})

router.delete('/invoice/:id' , (req, res)=>{
  Invoice.findByIdAndDelete(req.params.id)
  .then((invoice)=>{
    res.json(invoice);  
    })
    .catch((err)=>{
      res.status(500).json({message: err.message});
      });
      
})
module.exports = router;
