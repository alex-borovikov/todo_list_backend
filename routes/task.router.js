const router = require('express').Router();
const taskController = require('../controllers/task.controller')

router.get('/get/:id', taskController.getAll)
router.post('/create', taskController.create)
router.post('/edit', taskController.edit)
router.delete('/delete', taskController.delete)



module.exports = router