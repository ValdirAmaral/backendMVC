const Task = require('../models/Task')
const path = require('path')



//exportar as classes das rotas
module.exports = class TaskController { 
    
       static showTasks(req, res) {
       res.sendFile(path.resolve('views', 'tasks', 'home.html'))
    }
}
