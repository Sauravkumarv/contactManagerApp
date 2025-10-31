const {createContact,getContacts,getSingleContact,deleteContact}=require('../controller/contactController')

const express=require('express')


const router = express.Router();

router.post("/contacts",createContact);
router.get("/contacts",getContacts);
router.get("/contacts/:id",getSingleContact);
router.delete("/contacts/:id",deleteContact);

module.exports=router;