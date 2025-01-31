const express = require("express")
const cors = require("cors")
const mongodbDatabase = require("./config/db");
const userRoute = require("./routes/user.routes");
const taskRoute = require("./routes/task.routes");

const app = express();
app.use(express.json())
app.use(cors())
const PORT = 8000
mongodbDatabase()


app.use("/", userRoute)
app.use("/", taskRoute)


app.use("*", (req, res) => {
    res.status(404).json({message:"Page Not Found"})
})

app.listen(PORT , () => {
    console.log(`Server is running on port no. ${PORT} `)
})