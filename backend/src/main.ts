import { client } from './tmi/config'
import { app } from './server/serverSSE'

const port = 5174
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

client.connect()
