const mongoose = require('mongoose');
const User = new mongoose.Schema({
    id: { type: String, unique: true, required: true },
    wallet: { type: Number, default: 500 },
    bank: { type: Number, default: 0 },
    AlertSeen: { type: Boolean, default: false},
    cooldowns: {
        work: { type: Date },
        beg: { type: Date },
        daily: { type: Date }
    }
})

module.exports = { User: mongoose.model("User", User) }
