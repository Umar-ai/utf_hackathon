import mongoose from 'mongoose'

export async function connectdb(){

    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Something went wrong while connecting to the database",error)
    }
}