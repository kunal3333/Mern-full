import mongoose from 'mongoose'

let connectDB=async()=> {

    try
    {
        let db = await mongoose.connect(process.env.DBURL)
        console.log(`mongoDB connetced ${db.connection.host}`) 
    }
    catch(err)
    {
        console.log(err)
    }
 
}

export default connectDB;