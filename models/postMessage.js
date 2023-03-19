import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
	category: {
		type: String,
		// required: true,
		default: ""
	},
	subcategory: {
		type: String,
		// required: true,
		default: ""
	},
	grade: {
		type: String,
		default: ""
	},
	type: {
		type: String,
		// required: true,
		default: ""
	},
	difficulty: {
		type: String,
		// required: true,
		default: ""
	},
	question: {
		type: String,
		// required: true,
		default: ""
	},
	correct_answer: {
		type: String,
		// required: true,
		default: ""
	},
	reason: {
		type: String,
		default: ""
	},
	incorrect_answers: [{
		type: String,
		// required: true,
		default: [""]
	}],

	message: {
		type: String,
		default: ""
	}


})

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
