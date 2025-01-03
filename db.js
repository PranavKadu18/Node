const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://pranav1812:pranav2003@cluster0.nzart.mongodb.net/";
const dbname = "Testing";

const client = new MongoClient(uri);

const connect = async () => {
  await client.connect();
  console.log("database connected");

  const db = client.db(dbname);
  const collection = db.collection("User");

  const result = await collection.find({}).toArray();
  console.log(result);

  return "disconnected.";
};

connect().then(console.log).catch(console.error).finally(client.close());
