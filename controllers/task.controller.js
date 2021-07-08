const Task = require('../models/Task.model')

class TaskController {
    static async getAll (req,res) {
        const {id} = req.params
        const task = await Task.findById(id)
        res.status(200).json({message: 'Success', task})

    }
    static async create(req,res) {
        const {title, description, done, date} = req.body;
        const task = new Task({
            title,
            description,
            done,
            date
        })
        await task.save()
        res.status(200).json({message: 'Success', task})

    }
    static async edit(req,res) {
        const {id,title, description, done, date} = req.body
        const task = await Task.updateOne({
            _id: id
        },
            {
                $set: {
                    title,
                    description,
                    done,
                    date
                }
            })
        res.status(200).json({message: 'Success edit', task})

    }
    static async delete(req,res) {
        const {id} = req.body
        const task = await Task.findByIdAndDelete(id)
        res.status(200).json({message: 'Deleted', task})
    }
}

module.exports = TaskController