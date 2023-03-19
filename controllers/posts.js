import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

const router = express.Router();

export const getPosts = async (req, res) => {
	try {
		const postMessages = await PostMessage.find();
		res.status(200).json(postMessages);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
}

export const getPost = async (req, res) => {
	const { id } = req.params;
	try {
		const post = await PostMessage.findById(id)
		res.status(200).json(post);
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
}

export const createPost = async (req, res) => {
	const { category, subcategory, grade, type, difficulty, question, correct_answer, reason, incorrect_answers } = req.body;
	const newPostMessage = new PostMessage({ category, subcategory, grade, type, difficulty, question, correct_answer, reason, incorrect_answers });
	try {
		await newPostMessage.save();
		res.status(200).json(newPostMessage);
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
}

export const updatePost = async (req, res) => {
	const { id } = req.params;
	const { category, subcategory, grade, type, difficulty, question, correct_answer, reason, incorrect_answers } = req.body;
	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("not found");
	const updatedPost = { category, subcategory, grade, type, difficulty, question, correct_answer, reason, incorrect_answers };
	await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });
	res.status(200).json(updatedPost);


}

export const deletePost = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("no id found");
	await PostMessage.findByIdAndRemove(id);
	res.status(200).send("post deleted successfully");
}

export default router;
