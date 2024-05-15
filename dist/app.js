"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
/// parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
app.get('/:id/:Id', (req, res) => {
    console.log(req.params);
    res.send('Hello developersss');
});
app.post("/", (req, res) => {
    console.log(req.body);
    // res.send('got data')
    res.json({
        message: 'successfully recived data'
    });
});
exports.default = app;
