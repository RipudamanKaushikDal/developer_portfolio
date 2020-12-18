import { GraphQLObjectType, GraphQLString,GraphQLList,GraphQLNonNull,GraphQLInt, GraphQLSchema} from "graphql";
import mongoose from "mongoose";
import Projects from "./ProjectsDB.js";
import dotenv from "dotenv";

dotenv.config();


mongoose.connect(process.env.MongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });




const ProjectType = new GraphQLObjectType({
    name:"Project",
    fields:() => ({
        title:{type:GraphQLString},
        text:{type:GraphQLString},
        images:{type:GraphQLList(GraphQLString)},
        Github:{type:GraphQLString},
        LinkedIn:{type:GraphQLString}
    })
});




const MainQueryType = new GraphQLObjectType({

    name:"MainQuery",
    fields:{

        listProjects:{
            type:GraphQLList(ProjectType),
            resolve:(parent,args) => {
                return Projects.find((err, data) => {
                    if (err) {
                        return err;
                    } else {
                        return data;
                    }
                  })
            }
        },

        getProject:{
            type:ProjectType,
            args:{
                projectName:{type:GraphQLNonNull(GraphQLString)}
            },
            resolve:async(parent,args) => {
                return await Projects.findOne({title:args.projectName},(err,data) => {
                    if (err) {
                        return err
                    }
                    else {
                        return data
                    }
                });
            }
        },


    }
});


const Schema  = new GraphQLSchema({
    query:MainQueryType,
});

export default Schema