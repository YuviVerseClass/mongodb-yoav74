// Require mongoose
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    done: {
        type:Boolean,
        required: true,
        default: false
    }
})
const Task = mongoose.model("Task",taskSchema);

module.exports = Task;

// Implement schema for a task
// Each task should have:
// - title (String, required)
// - done (Boolean, defaults to false)


// Export the model as 'Task'