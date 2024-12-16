import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title:{
        type: 'string',
        required: true
    },
    description:{
        type: 'string',
        required: true
    },
    category:{
        type: 'string',
        required: true
    },
    image:{
        type: 'string',
        required: true
    },
    author:{
            type: 'string',
            required: true
    },
    author_img:{
        type: 'string',
        required: true
    },
    date:{
        type: 'date',
        default: Date.now()
    },
})

const BlogModel = mongoose.models.blog || mongoose.model('blog',Schema);

export default BlogModel;