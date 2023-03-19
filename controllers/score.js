import express from 'express';

import ScoreBoard from '../models/score.js'

const routes = express.Router()

export const getScore = async (req, res) => {
	try {
		const scoreBoard = await ScoreBoard.find();
		res.status(200).json(scoreBoard);

	} catch (error) {
		res.status(404).json({ message: error.message })
	}
}

export const createScore = async (req, res) => {
	const { user, score } = req.body;
	const newScore = new ScoreBoard({ user, score });
	try {
		await newScore.save()
		res.status(200).json(newScore);
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
}

export default routes;
