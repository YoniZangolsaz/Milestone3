"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const createBook = require('./books/bookRouter');
const createWriter = require('./writer/writerRouter');
app.use(bodyParser.json());
app.use('/books', createBook);
app.use('/writers', createWriter);
mongoose_1.default.connect('mongodb://0.0.0.0:27017', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose_1.default.connection.on('connected', () => {
    console.log('MongoDB Connected!');
});
app.listen(3010, () => {
    console.log('listening to port 3010');
});
//# sourceMappingURL=app.js.map