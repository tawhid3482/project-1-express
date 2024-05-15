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
/// middleware
const userRoute = express_1.default.Router();
const courseRoute = express_1.default.Router();
app.use('/api/v1/users', userRoute);
app.use('/api/v1/course', courseRoute);
userRoute.get('/create-user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        seccess: true,
        message: 'ami paisi',
        data: user
    });
});
courseRoute.post('/create-course', (req, res) => {
    const cours = req.body;
    console.log(cours);
    res.json({
        seccess: true,
        message: 'post complete',
        data: cours
    });
});
const logger = (req, res, next) => {
    // console.log(req.url)
    next();
};
app.get('/', logger, (req, res) => {
    console.log(req.query);
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
