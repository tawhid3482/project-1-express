import express, { NextFunction, Request, Response } from "express"
const app = express()
const port = 3000

/// parsers
app.use(express.json())
app.use(express.text())

/// middleware

const userRoute = express.Router()

app.use('/api/v1/users', userRoute)

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