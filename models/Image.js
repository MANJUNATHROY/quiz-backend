import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
	name: {
		type: String, 
		default: ""
	},
	image: {
		data: Buffer,
		contentType: String
	},
})

const ImageModel=mongoose.model("ImageModel",imageSchema);
export default ImageModel;
