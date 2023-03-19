import mongoose from 'mongoose'

const scoreSchema = new mongoose.Schema({
	user: {
		type: String,
		// required: true,
		default: ""
	},
	score: {
		type: String,
		// required: true,
		default: ""
	}
})

const ScoreBoard = mongoose.model("ScoreBoard", scoreSchema);
export default ScoreBoard;
