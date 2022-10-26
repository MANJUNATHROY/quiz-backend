import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({

	category: {
		type: String,
		required: true
	},
	type: {
		type: String,
		required: true
	},
	difficulty: {
		type: String,
		required: true
	},
	question: {
		type: String,
		required: true
	},
	correct_answer: {
		type: String,
		required: true
	},
	incorrect_answers: [{
		type: String,
		required: true
	}],

	message: {
		type: String,
		default: ""
	}


})

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
