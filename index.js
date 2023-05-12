// const fs = require("fs");
// const path = require ("path");

// const filename = path.join(process.cwd(),"demo.txt");
// fs.writeFileSync(filename,"Hello Im learning node.js and express");

// const f2 = fs.readFileSync(filename).toString();

// console.log(f2);


// const a1 = require("./user");
// console.log(a1);


const express = require("express");
const app = express();
const PORT = 4000;


const mongooes = require("mongoose");
mongooes.connect("mongodb://localhost:27017/node1");
const con = mongooes.connection
con.on("open", () => {
    console.log("Database connected successfully");
});
app.use(express.json());
app.use(express.urlencoded({extended:true}))
require("./routes")(app);


// app.get("/list", async(req, res) => {
//     console.log("This is a get method");
//     res.send("hello!");
// });

// app.post("/post", async(req, res) => {
//     console.log("This is a post method");
//     res.send("This is a post method");
// });




app.listen(PORT,() => {
    console.log(`This is Me on ${PORT}`);
})
