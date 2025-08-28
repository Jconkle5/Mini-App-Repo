import express from 'express'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT || 3000;

app.use(express.static(join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello Express ft. Nodemon.rs')
})
// Middleware or API
// Send HTML File
app.get('/barry', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'barry.html'))
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})