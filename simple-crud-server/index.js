const express  = require("express")
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require("cors")
const app = express();
const port = process.env.PORT || 5000;
// middleware
app.use(cors())
app.use(express.json())
// user and password
// sumonpaul3217
//pass: HES4JuZbDYhefiW2
const uri = "mongodb+srv://sumonpaul3217:HES4JuZbDYhefiW2@cluster0.nrfwsc1.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const usersCollection = client.db("insertDB").collection('users')
    // Read data from backend database
    app.get("/users", async (req, res)=>{
      const cursor = usersCollection.find();
      const result = await cursor.toArray()
      res.send(result)
    })   
     // update data
    app.get("/users/:id", async (req, res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await usersCollection.findOne(query)
      res.send(result)
    })
    // getting data from client side
    app.post("/users",async (req,res)=>{
        const user = req.body;
        const result = await usersCollection.insertOne(user)
        res.send(result)
    })
    // update data using put 
    app.put("/users/:id", async(req, res)=>{
      const id = req.params.id;
      const user = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = {upsert: true}
      const updateUser = {
       $set:{
        name: user.name,
        email: user.email
       }
      }
      const result = await usersCollection.updateOne(filter, updateUser, options)
      res.send(result)
    })

    // delete data single data
    app.delete("/users/:id",async (req, res)=>{
      const id = req.params.id;
      console.log("please delete this user from database", id)
      const query = {_id:new ObjectId(id)}
      const result = await usersCollection.deleteOne(query)
      res.send(result)
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.log);
app.get("/", (req, res)=>{
    res.send("Simple crud is running")
})
app.listen(port, ()=>{
    console.log(`simple crud is running ${port}`)
})