const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const MONGODB_URL = process.env.MONGODB_URL

const db = async () => {
    try {
        const con = await mongoose.connect(MONGODB_URL)
        console.log(`mongodb connected : ${con.connection.host}`)
    } catch (error) {
        console.error(error)
    }
}

module.exports = {db}  