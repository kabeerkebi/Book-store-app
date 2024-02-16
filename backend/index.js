import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookmodel.js";
import booksRoute from "./routes/booksroutes.js";
import cors from "cors";
const app = express();

//middleware for parsing body
app.use(express.json());

app.use(cors());
// middleware for handling  cors  policy

// app.use(
//   cors({
// origin :"http://localhost:3000",
// methods : ['GET','POST','PUT',"DELETE"],
// allowedHeaders:['Content-Type']

//   })
// )

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome to mern stack ");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("app connected data base");
    app.listen(PORT, () => {
      console.log(`app is rinning ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
