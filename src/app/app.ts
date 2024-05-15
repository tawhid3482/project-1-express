import express, { NextFunction, Request, Response } from "express"
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

courseRoute.post('/create-course', (req: Request, res: Response) => {
    const cours = req.body;
    console.log(cours)

    res.json({
        seccess: true,
        message: 'post complete',
        data: cours
    })
})


const logger = (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.url)
    next()
}


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

export default app