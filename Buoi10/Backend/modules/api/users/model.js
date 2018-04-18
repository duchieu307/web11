const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userModel = new Schema(
    {
        avatarURL: { type: String, default: "No Avatar" },
        Username: { type: String, require: true },
        Password: { type: String, require: true },
        Email: { type: String, require: true },
        active: { type: Boolean, require: true },
    },
    { timestamps: { createdAt: "createAt" } }
)

module.exports = mongoose.model("users", userModel);
