const User = require("./users.model")


const getUsers = async (req,res) => {
    try {
         const users = await User.find()
         res.status(200).send(users)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const addUsers =  async (req,res) => {
   try {
    if( req.body?.name === '' ) {
        res.status(404).send("name is required")
        return
    }
    const new_user = await User.create(req.body)                       // const new_user = {
    res.status(201).send(new_user)                                 //id: req.body.id,
     } catch (error) {                                                //name: req.body.name}
      res.status(500).send(error.message)                             //users.push(new_user)          
    }                                                                
}   
    
const updateUsers =  async (req,res) => {
    try {
        if( req.body?.name === '' ) {
            res.status(404).send("name is required")
            return
        }
        const updated_user = await User.findOneAndUpdate(req.params.id,req.body,{new:true})
         /*const user_id = req.params.id
        const user = users.find(u=>u.id===user_id)
        user.name = req.body.name*/
        res.status(200).send(updated_user)
    } catch (error) {
        res.status(500).send(error.message)
    } 
   
}

const deleteUsers = async (req,res) => {
    try {
        const user_id = req.params.id
    await User.findByIdAndRemove(user_id)
   //users= users.filter(u=>user_id !==u.id)
    res.status(204).end()                       //send(`user ${user_id} was deleted `)
    } catch (error) {
        res.status(500).send(error.message)
    } 
}

module.exports = {
    getUsers,
    addUsers,
    updateUsers,
    deleteUsers
}