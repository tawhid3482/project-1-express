import express, { Request, Response, response } from "express"
const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello developersss')
})
app.post("/",( req:Request , res: Response )=>{
    console.log(req.body)
    res.send('got data')
})

export default app