const express = require("express");
const app = express();
const authRoute = require('./router/auth');
const connectDb = require('./database/db');
const cors = require('cors');
const Trainer = require("./schema/Trainer");
const Member  = require('./schema/Member');
const errorMiddleware = require("./middleware/error-middleware");
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoute);
// app.use("/api/auth",Trainer);
// app.use("/api/form", contactRoute);

app.use(errorMiddleware);
const PORT = 5000;
connectDb().then(() => {
   
    app.listen(PORT, () => {
        console.log(`our server is running at port=>${PORT}`)
    })
})




