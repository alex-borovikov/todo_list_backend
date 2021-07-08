const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    done: {type: Boolean, required: true, default: false},
    date: {type: Date, required: true}
},{
    timestamps: true
})

module.exports = mongoose.model('Todo', TodoSchema)