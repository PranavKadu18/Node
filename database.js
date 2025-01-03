//  mongodb+srv://pranav1812:pranav2003@cluster0.nzart.mongodb.net/

const {MongoClient} = require("mongodb");

const uri = "mongodb+srv://pranav1812:pranav2003@cluster0.nzart.mongodb.net/";
const dbname = "Testing";

const client = new MongoClient(uri);

const data = [
    {
    first_name:"arnav",
    last_name:"karanjavne",
    "cell_no.":"231423523"
    },
    {
        first_name:"varad",
        last_name:"pawaraws",
        "cell_no.":"137289053"
    },
    {
        first_name:"advait",
        last_name:"karanjavne",
        "cell_no.":"1372342346"
    }
]

const rep = {
    first_name:"advait",
    last_name:"pawar",
    "cell_no.":"8352478932"
}

const connect = async () => {
    await client.connect();
    console.log("database connected");

    const db = client.db(dbname);
    const collection = db.collection("User");

    //insert
    // const result = await collection.insertMany(data);
    // console.log(result);

    //find(filter)
    // const result = await collection.find({first_name:"pranav"}).toArray();
    // console.log(result);

    //findone
    // const result = await collection.findOne({last_name:"karanjavne"});
    // console.log(result);

    //delete one
    // const deleted_id = await collection.deleteOne({last_name:"karanjavne"});
    // console.log(deleted_id.deletedCount);

    //delete many
    // const delete_multi = await collection.deleteMany({last_name:"kadu"});
    // console.log(delete_multi.deletedCount);
    
    //update one
    // const update_result = await collection.updateOne({last_name:"karanjavne"},{$set:{last_name:"pawar"}});
    // console.log(update_result);

    //create index
    // const indexName = await collection.createIndex({ first_name: -1 });
    // console.log('index name =', indexName);

    //findoneanddelete
    // const result = await collection.findOneAndDelete({first_name:"advait"});
    // console.log(result);

    //findoneandupdate
    // const result = await collection.findOneAndUpdate({first_name:"arnav"},{$set:{first_name:"mudra"}});
    // console.log(result);

    //findoneand
    // const result = await collection.findOneAndReplace({first_name:"advait"},rep);
    // console.log(result);
    
    
    
     
    
    
    return "done."
}

connect()
.then(console.log)
.catch(console.error)
.finally(client.close());
