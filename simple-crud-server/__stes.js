//create post operations
// mongodb connection
// create account
// 2. create an user with password
//3 .whitelist ip address
//4. database -> connect -> driver -> node -> view full  code 
//5. change password in uri
// -----------------------------------------------------

// create post 
// app.post("/users" async (req, res))
//3. make the function async to use await inside it
// 4. make sure use the express.json() middleware
//4.  access data from the body: const user = req.body
// 5. const result  = await userCollection.insertOne(user)
//6. res.send(user)



// client side
//create fetch("url")
// 2nd paramitre as an object
// provide method: "POST"
// add headers : {"content-type: "application/json"}
//add body : JSON.stringify(user)


//Read-----------------
// set a cursor . const cursor = userCollection.find()// we can't provide paramiter iside find means all data needed
// const result = await cursor.toArry()



// Delete

// app.delete("/users/:id", async(req, res)=>{})
// specify uniqe object id to delete the right users
// 2. const query = {_id: ObjectId(id)}

// client side 
// create dynamic url using uniq id
//2. make sure mention the delete method