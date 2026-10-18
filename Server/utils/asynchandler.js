const asynchandler=(fn)=>async(req,res,next)=>{
    try {
        await fn(req,res,next)
    } catch (error) {
        console.log('something went wrong ft.asynchandler',error)
    }
}

export {asynchandler}