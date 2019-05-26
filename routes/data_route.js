const express=require('express')
const router=express.Router();

const dataController=require('../controller/data.controller');

//route to get data top data from DB
router.get('/top',dataController.get_top_data);

//route to get data week data from DB
router.get('/week', dataController.get_week_data);


module.exports=router