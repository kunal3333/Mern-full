async function userLogut(req,res){
    try{
res.clearCookies("token")


res.json({
    message :"Logged out sucessfully",
    error:false,
    sucess:true,
    data :[]
})
  
    }
    catch(err){
        res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }
}


module.exports = userLogut