import { client } from './tmi/config'
import { app } from './server/serverSSE'

app.listen(5173, () => {
  console.log('Server started on port 5173')
})

client.connect()
