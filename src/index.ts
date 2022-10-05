import * as express from 'express'
import { userRouter } from './routes/user.router'

const PORT = 8080

let app = express()

app.use(userRouter)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
