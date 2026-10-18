import { apierror } from "../utils/apierror.js";
import { apiresponse } from "../utils/apiresponse.js";
import { asynchandler } from "../utils/asynchandler.js";
import { Desire } from "../models/desire.model.js";


const create_Desire=asynchandler(async(req,res)=>{
    const{name,desire}=req.body
    if([name,desire].some((val)=>val==null||"")){
        throw new apierror(205,"all these fields are required for a desire")
    }
    const desiree=await Desire.create({
        name,
        desire
    })
    if(!desiree){
        throw new apierror(205,"something went wrong while creating the desire")
    }
    return res
    .status(200)
    .json(new apiresponse(200,desiree,"Desire created successfully"))
})


export {create_Desire}