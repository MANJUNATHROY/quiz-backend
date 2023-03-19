import express from 'express';
import mongoose from 'mongoose';

import ImageModel from '../models/image.js';
const route = express.Router();


export const getImage = async (req, res) => {
	try {
		const imageModel = await ImageModel.find();
		res.status(200).json(imageModel);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
}

// createImage = async (req, res) => {
// 	const newImage = new ImageModel({
// 		name: req.body.name,
// 		image: {
// 			data: req.file.filename,
// 			contentType: 'image/png'
// 		}
// 	})
// 	try {
// 		await newImage.save()
// 		res.status(200).json(newImage);
// 	} catch (error) {
// 		res.status(404).json({ message: error.message })
// 	}
// }

export default route;
