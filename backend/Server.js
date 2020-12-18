import express from "express";
import {graphqlHTTP} from "express-graphql";
import Cors from "cors";
import Schema from "./Schema.js";
import mongoDB from "mongodb";
import assert  from "assert";
import dotenv from "dotenv";

dotenv.config();
  
const dbName = "ProjectDB"
const app = express();

app.use(express.json());
app.use(Cors());

app.use("/projects",graphqlHTTP({
    schema:Schema,
    graphiql:true
}));

app.get('/image/:filename', (req, res) => {

    mongoDB.MongoClient.connect(process.env.MongoUri,{useNewUrlParser:true,useUnifiedTopology:true},async(error,client) => {
        assert.ifError(error)

        const db = client.db(dbName);

        var bucket = new mongoDB.GridFSBucket(db);

        await bucket.openDownloadStreamByName(req.params.filename)
            .pipe(res)
    });

});




  

app.listen(4000, () => (console.log("Server Started on port 4000")));