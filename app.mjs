import express from 'express'

const app = express()

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello Express ft. Nodemon.rs')
})
// Middleware or API
// Send HTML File


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

//TODO: Refactort to use env port.
