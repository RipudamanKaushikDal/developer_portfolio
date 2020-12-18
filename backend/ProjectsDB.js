import mongoose from "mongoose";


const ProjectsDB =  mongoose.Schema({
        text:String,
        title:String,
        images:[String],
        Github:String,
        LinkedIn:String
    });

export default mongoose.model("Projects",ProjectsDB,"Projects");
