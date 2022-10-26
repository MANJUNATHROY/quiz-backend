import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './api/routes/posts.js';
dotenv.config();

const app = express();
// const connect = async () => {
// 	try {
// 		mongoose.connect(process.env.MONGO);
// 		console.log("connected to mongoDB");
// 	} catch (error) {
// 		throw (error);
// 	}
// }
// mongoose.connection.on("disconnected", () => {
// 	console.log("mongoDB disconnected");
// })
// app.get("/", (req, res) => {
// 	res.send("hello");
// })

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use('/', posts);

const CONNECTION_URL = 'mongodb+srv://steamquiz:987654321@cluster0.dgtmzjd.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 8800

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
	.catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);


// app.listen(8800, () => {
// 	connect(),
// 		console.log("connected to backend")
// })
