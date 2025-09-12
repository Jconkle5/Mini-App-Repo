import express from 'express';
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


app.get('/barry', (req, res) => {
  // res.send('barry. <a href="/">home</a>')
  res.sendFile(join(__dirname, 'public', 'barry.html'));
})

// app.get('/barry', (req, res) => {
//   // Inject a server variable into barry.html
//   readFile(join(__dirname, 'public', 'barry.html'), 'utf8')
//     .then(html => {
//       // Replace a placeholder in the HTML (e.g., {{myVar}})
//       const injectedHtml = html.replace('{{myVar}}', myVar);
//       res.send(injectedHtml);
//     })
//     .catch(err => {
//       res.status(500).send('Error loading page');
//     });
// })

app.get('/api/barry', (req, res) => {
  // res.send('barry. <a href="/">home</a>')
  const myVar = 'Hello from server!';
  res.json({ myVar });
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})