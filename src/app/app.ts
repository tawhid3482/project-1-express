import { error } from "console"
import express, { NextFunction, Request, Response, response } from "express"
const app = express()
const port = 3000

/// parsers
app.use(express.json())
app.use(express.text())

/// middleware

const userRoute = express.Router()
const courseRoute = express.Router()

app.use('/api/v1/users', userRoute)

app.use('/api/v1/course', courseRoute)

userRoute.get('/create-user', (req: Request, res: Response) => {
    const user = req.body;
    console.log(user)

    res.json({
        seccess: true,
        message: 'ami paisi',
        data: user
    })
})

const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url)
    next()
}

app.get('/', logger, async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send(something)
    }
    catch (error) {
        console.log(error)
        next(error)
        // res.status(400).json({
        //     success: false,
        //     message: 'Failed to get data'
        // })
    }
})



courseRoute.post('/create-course', (req: Request, res: Response) => {
    const cours = req.body;
    console.log(cours)

    res.json({
        seccess: true,
        message: 'post complete',
        data: cours
    })
})




app.get('/', logger, (req: Request, res: Response) => {
    console.log(req.query)

    res.send('Hello developersss')
})

app.post("/", (req: Request, res: Response) => {
    console.log(req.body)
    // res.send('got data')
    res.json({
        message: 'successfully recived data'
    })
})


/// global error handler

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    // console.log(error)
    if (error) {
        res.status(400).json({
            success: false,
            message: 'Failed to get data'
        })
    }
})

export default app