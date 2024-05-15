"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const logger = (req, res, next) => {
    console.log(req.url);
    next();
};
app.get('/', logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(something);
    }
    catch (error) {
        console.log(error);
        next(error);
        // res.status(400).json({
        //     success: false,
        //     message: 'Failed to get data'
        // })
    }
}));
courseRoute.post('/create-course', (req, res) => {
    const cours = req.body;
    console.log(cours);
    res.json({
        seccess: true,
        message: 'post complete',
        data: cours
    });
});
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
/// global error handler
app.use((error, req, res, next) => {
    // console.log(error)
    if (error) {
        res.status(400).json({
            success: false,
            message: 'Failed to get data'
        });
    }
});
exports.default = app;
