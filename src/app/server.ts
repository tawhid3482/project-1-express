import { Server } from 'http'
import app from './app'

const PORT = 5000

let server : Server

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })

