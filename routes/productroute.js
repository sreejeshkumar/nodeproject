const express = require("express")
const productcontroller = require("../controller/productcontroller")
const product = require("../model/product")
const router = express.Router()



router.post("/",productcontroller.addlist)
router.put("/:id",productcontroller.updatelist)
router.delete("/:id",productcontroller.deletelist)



module.exports=router