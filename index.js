const express = require("express")
const path = require("path") // for ejs path
const { connectToMongoDB } = require("./connect.js")
const urlRoute = require("./routes/url")
const cookieParser = require("cookie-parser")
const {restrictToLoggedinUserOnly, checkAuth} = require("./middleware/auth.js")


const app = express();
const PORT = 8001

const staticRoute = require("./routes/staticRouter.js")
const URL = require("./model/url.js")
const userRoute = require("./routes/user.js")

connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
    .then(() => { console.log("mongoDB connected") })

//working on SSR via ejs
app.set ("view engine", "ejs");
app.set ("views", path.resolve("./views"))


//middleware
app.use(express.json());
app.use(express.urlencoded({extended : false }));
app.use(cookieParser());

app.use("/url",restrictToLoggedinUserOnly, urlRoute);
app.use ("/" , checkAuth, staticRoute);
app.use ("/user", userRoute)

app.listen(PORT, () => console.log(`listening on the port ${PORT}`)); 