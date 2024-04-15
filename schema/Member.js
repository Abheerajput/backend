const mongoose = require('mongoose');

const crypto = require('crypto');

const memberSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

    DateofAddmission: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    Address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    Membership: {
        type: String,
        required: true
    },
    feesPending: {
        type: Number,
        default: 0
    },

    isAdmin: {
        type: Boolean,
        default: false,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});

const Member = mongoose.model('Member', memberSchema);
module.exports = Member; 