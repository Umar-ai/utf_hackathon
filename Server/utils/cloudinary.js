import {v2 as Cloudinary} from 'cloudinary'
import fs from 'fs'


Cloudinary.config({
  cloud_name:process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})



const cloudinaryUpload=async(image)=>{
try {
  if(!image) return null
 const resposne= await Cloudinary.uploader.upload(image,{resource_type:"auto"})
 fs.unlinkSync(image)
 return resposne


} catch (error) {
  console.log("something went wrong while upload images in cloudinary",error)  
  fs.unlinkSync(image)
}

}

export {cloudinaryUpload}