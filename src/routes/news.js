const express = require('express');
const axios=require('axios');
const newsRouter=express.Router();
newsRouter.get('',async(req,res)=>{
try {
    
    const newAPI=await axios.get(`https://newsapi.org/v2/top-headlines/sources?apiKey=e9f59e91a6fc4aca9df4255dcb2913a9&countries=gb`)
    console.log(newAPI.data.sources);  //debugging
   
    res.render('news',{articles:newAPI.data.sources}); // first data is response net one is the articles in the response(array)
} catch (error) {
    if(error.response) {
        console.log(error.response.data)
    } else if(error.request) {
        console.log(error.request)
    } else {
        console.log('Error', error.message)
    }
}
}
);

module.exports=newsRouter;