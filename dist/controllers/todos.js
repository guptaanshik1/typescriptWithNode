"use strict";
// import { Request, Response, NextFunction } from "express"
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(200).json({
        message: 'Created the requested todo',
        newTodo
    });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.status(200).json({
        TODOS
    });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error('Could not find todo.');
    }
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, updatedText);
    res.status(200).json({
        success: true,
        udpatedTodo: TODOS[todoIndex]
    });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error('Could not find todo.');
    }
    TODOS.splice(todoIndex, 1);
    res.status(200).json({
        success: true,
        message: "Todo has been deleted successfully"
    });
};
exports.deleteTodo = deleteTodo;
