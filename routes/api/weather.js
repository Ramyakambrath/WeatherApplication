const express=require('express')
const router=express.Router()
const axios=require('axios').default;

const baseUrl='http://api.openweathermap.org/data/2.5';	
const apiId = '&appid=5133103833178415fb79f72e25e41e1e&units=imperial';

router.post('/',(req,res)=>{
    const lat=req.la
})
router.get('/',(req,res)=>{

    const userLocation= (url1,url2,zipcode)=>{
        let newurl=url1 + zipcode + url2;
       
        return newurl;
    };

    const apiUrl =  userLocation(baseUrl, apiId, zipcode);
    
     axios.get(apiUrl)
    .then(data=>  {                                                                                                                     
    console.log(data.data)
    res.send(data.data)
})
    .catch(err=>{
        console.log(err)
    })

})



module.exports = router