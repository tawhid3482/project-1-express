import express, { Request, Response, response } from "express"
const app = express()
const port = 3000

/// parsers
 app.use(express.json())
 app.use(express.text())
app.get('/', (req: Request, res: Response) => {
    res.send('Hello developersss')
})
app.post("/",( req:Request , res: Response )=>{
    console.log(req.body)
    // res.send('got data')
    res.json({
        message:'successfully recived data'
    })
})

export default app