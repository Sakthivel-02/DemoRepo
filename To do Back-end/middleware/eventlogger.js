module.exports =  (req,res,next ) => {
    console.log({ 
        url : req.originalUrl,
        method : req.method,
        body : req.body 
    })
    next()
}