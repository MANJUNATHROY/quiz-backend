import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import multer from "multer";
import cors from 'cors';
import posts from './routes/posts.js';
import scores from './routes/score.js';
import images from './routes/image.js';
import ImageModel from "./models/image.js";
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
// 	res.status(200).json("Hello");
// })			

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use('/question', posts);
app.use('/score', scores);
app.use('/image', images);

const CONNECTION_URL = 'mongodb+srv://mnroy2001:m123@quiz.zpvbqby.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 8800

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
	.catch((error) => console.log(`${error} did not connect`));



// const Storage = multer.diskStorage({
// 	destination: 'uploads',
// 	filename: (req, file, cb) => {
// 		cb(null, file.originalname)
// 	}
// })

// const createImage = multer({
// 	storage: Storage
// }).single('testImage')

// app.post('/upload', (req, res) => {
// 	createImage(req, res, (err) => {
// 		if (err) {
// 			console.log(err)
// 		}
// 		else {
// 			const newImage = new ImageModel({
// 				name: req.body.name,
// 				image: {
// 					data: req.file.filename,
// 					contentType: 'image/png'
// 				}
// 			})
// 			try {
// 				newImage.save()
// 				res.status(200).json(newImage);
// 			} catch (error) {
// 				res.status(404).json({ message: error.message })
// 			}
// 		}
// 	})
// })
// mongoose.set('useFindAndModify', false);


// app.listen(8800, () => {
// 	connect(),
// 		console.log("connected to backend")
// })
