// API
// CRUD 
// get - read (get the data from the server)
// post - create (To create a new data)
// put  - update ()
// delete - delete

import express from "express";
const app = express();
const port = 2000;



// 1. Create (POST):

app.post('/users',(req, res) => {
    let user = req.body;
    console.log('New user: ', user);
    res.send(user);
   });

//   2. Read (GET):

app.get('/users',(req, res) =>{
    let users = [
       {id: 1, name: 'Admin'},
       {id: 2, name: 'Khawaja'}
    ];
    console.log('Getting all users: ', users);
    res.send(users);
   });
   
   app.get('/users/:id', (req, res) => {
    let userId = req.params.id;
    let user = {id: userId, name: 'Admin'};
    console.log('Getting user by id: ', user);
    res.send(user);
   });

   // 3. Update (PUT):

   app.put('/users/:id',(req, res) => {
    let userId = req.params.id;
    let user = req.body;
    console.log('Updating user with id: ', userId);
    console.log('Updated user details: ', user);
    res.send(user);
   });

   // 4. Delete (DELETE):

   app.delete('/users/:id',(req, res) => {
    let userId = req.params.id;
    console.log('Deleting user with id: ', userId);
    res.send({id: userId, deleted: true});
   });

   app.listen(port,() => {
    console.log(`Listening to the port no. ${port}`);
});
 