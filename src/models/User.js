import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    userName: {type:String, required: true, unique: true},
    userEmail: {type: String, required: true, unique: true},
    userPwd: {type: String, required: true},
})

// userSchema.pre("save",async function() { //middleware before save database
//     if(this.isModified("password")){
//         this.password = await bcrypt.hash(this.password, 5);
//         //hashing the password before save the data in database
//     }
// });
//

const User = mongoose.model("User",userSchema);
export default User;
