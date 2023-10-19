/** @format */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Basic Schema
const BasicSchema = new Schema({
    first_name: {
        type: String,
        default: ''
    },
    last_name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: '',
        require: true
    },
    password: {
        type: String,
        default: '',
        require: true
    }
});

export default mongoose.model('users', BasicSchema);