import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://krishkumar933646_db_user:PgxmkLLNWWXMSSp2@cluster0.hyzualw.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}