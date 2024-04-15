const { Schema, model } = require('mongoose');

const TrainerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    DateOfJoining: {
        type: Date,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    },
    Skills: {
        type: String,
        required: true
    },
});

const TrainerModel = model("trainer", TrainerSchema);
module.exports = TrainerModel;
