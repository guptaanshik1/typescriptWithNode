"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = __importDefault(require("./routes/todo"));
const body_parser_1 = require("body-parser");
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use('/todos', todo_1.default);
// error handling middleware
app.use((err, req, res, next) => {
    res.status(400).json({ message: err.message });
}); // if no route matches then this middleware will be executed
app.listen(3001, () => console.log(`Server is running on PORT: 3001`));
