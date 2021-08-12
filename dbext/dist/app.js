"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const mongoose = require('mongoose');
mongoose.connect(`mongodb://0.0.0.0:27017`, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
    console.log('MongoDB Connected!');
});
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello world!!!'
    });
});
module.exports = app;
//# sourceMappingURL=app.js.map